import { createToken, resetPasswordToken } from "../../utils/token-generator";
import { authorize } from "../../utils/authorize-resolvers";
import { UserInputError } from "apollo-server-express";
import { User, Especialidad } from "../../utils/sequelize";
import { passwordMatch } from "../../utils/password";


export const Query = {
    Login: authorize([], async (obj, { data }, context) => {
      console.log("data auth", data);
      try {
       const user = await User.findOne({
          where: {
            email : data.email,
          },
          include: [Especialidad]
        });
        if(!user) throw 'Usuario o contraseña incorrecta'
        if(!passwordMatch(data.password, user.toJSON().password)) throw 'Usuario o contraseña incorrecta'
        console.log("query result", user.toJSON());
        const token = createToken({
          id: user.id,
          username: user.email,
          role: user.role,
          dni: user.dni
        });
        return {
          token: {
            code: token.code,
            expire: token.payload.exp,
          },
          user: user,
        };

      } catch (e) {
        console.error(e);
        return new UserInputError(e);
      }
    }),
  };
  
  export const Mutation = {
    SignUp: authorize([], async (obj, { data }, context) => {
      try {
        let exist = await User.find({ email: data.email });
        if (exist.length > 0) throw "email-in-using";
        return User.create(data)
          .then(async (user) => {
            return {
                user: user,
            };
          })
          .catch((err) => {
            console.error(err);
            throw err;
          });
      } catch (error) {
        console.error(error);
        return new UserInputError(error);
      }
    }),
    RecoveryPassword: authorize([], (_, { email }) => {
      return User.findOne({ email: email })
        .then((user) => {
          if (!user) throw "email-not-exist";
          const token = resetPasswordToken({});
          sendmail({
            destinatary: user.email,
            messageType: "recovery-password",
            token: token.code,
          });
  
          user.hash = token.code;
          return user.save();
        })
        .then((user) => {
          return {
            status: "success",
          };
        })
        .catch((error) => {
          return new UserInputError(error);
        });
    }),
    ResetPassword: authorize([], (_, { token, password }) => {
      return User.findOne({ hash: token })
        .then((user) => {
          if (!user) throw "invalid-token";
          // pendiente validar respuesta del servidor de correo
          user.password = password;
          user.hash = "";
          return user.save();
        })
        .then((user) => {
          return {
            status: "success",
          };
        });
    }),
  };
  