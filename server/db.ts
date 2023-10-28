require('dotenv').config();
const { DB_STRING } = process.env;
import { connect } from "mongoose";

export const startConnection = async () => {
    try {
        const db = await connect(DB_STRING+"/tasks-db");
        console.log(db.connection.name);
    } catch(error) {
        console.log(error);
    }
};