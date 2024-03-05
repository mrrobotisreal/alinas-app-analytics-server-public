import mongoose from "mongoose";

const DB_CONNECTION_STRING = "mongodb://127.0.0.1:27017/events";

export const connection = mongoose.connect;

export const init_db = async () => {
  connection(DB_CONNECTION_STRING)
    .then(() => {
      console.log('Successfully connected to "events" database ✅');
      console.log(
        "Mongoose Connection ReadyState:",
        !!mongoose.connection.readyState
      );
    })
    .catch((err) => console.error(err));
};