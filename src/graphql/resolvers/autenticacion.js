import { createToken, resetPasswordToken } from "../../utils/token-generator";
import { authorize } from "../../utils/authorize-resolvers";
import { UserInputError } from "apollo-server-express";
import { User, Especialidad } from "../../utils/sequelize";
import { passwordMatch } from "../../utils/password";

export const Query = {


};

export const Mutation = {

        login: authorize([], async (obj, { input }, context) => {
            console.log('login de usuario', input);
            try {
                
            } catch (error) {
                console.log('error login', errror);
                
            }
            
        }),

};