import mongoose from "mongoose";
import config from "../config";

export default function (app) {
  try {
    mongoose.Promise = global.Promise;
    /*
      fix para utiliar los campos ID en los esquemas de graphql, porque la  version actual de graphql no soporta datos de tipo bson
      error: ID cannot represent value: _bsontype
    */
    mongoose.Types.ObjectId.prototype.valueOf = function () {
      return this.toString();
    };

    const env = process.env.NODE_ENV || "development";

    mongoose.set("debug", env !== "production");

    const url = config.db.mongo[env];

    console.log("url mongo: ", url);

    return mongoose
      .connect(url, { useNewUrlParser: true })
      .then(() => {
        console.log("db inicializada");
      })
      .catch((err) => {
        console.log("error al inicializar mongo: ", err);
        throw err;
      });
  } catch (error) {
    console.log("error mongoose: ", error);
  }
}

export class TransactionsDB {
  constructor() {
    this.counterTryError = 0;
  }

  async initSession() {
    try {
      // statements
      this.session = await mongoose.startSession({
        readPreference: { mode: "primary" },
      });
      this.session.startTransaction({
        readConcern: { level: "snapshot" },
        writeConcern: { w: "majority" },
      });
    } catch (e) {
      // statements
      console.log("error iniciando transaccions mongodb: ", e);
    }
  }

  getSecondRandom() {
    // Math.floor(Math.random() * (max - min + 1)) + min;
    return (Math.floor(Math.random() * (9 - 1 + 1)) + 1) * 1000;
  }

  getSession() {
    return this.session;
  }

  async commitWithRetry() {
    this.counterTryError++;
    console.log(`
      -----------------------------------
          commiting transaction to db, try ${this.counterTryError}
      -----------------------------------
    `);

    return this.session
      .commitTransaction()
      .then(async (result) => {
        await this.session.endSession();
        console.log("--: Transaction committed: ");
        return result;
      })
      .catch(async (error) => {
        console.log(`
      ------------------------------------------  
           error commiting transaction to db in trying ${this.counterTryError} 
      ------------------------------------------
      `);
        console.log(error);
        if (error.codName === "TransactionCommitted") {
          console.log(
            "------: Error TransactionCommitted, transaction aborted"
          );
          return await this.session.abortTransaction();
        } else {
          console.log("Error during commit ...");
          await this.session.endSession();
          return error;
        }
      });
  }
}
