import { Schema, model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type: String,
        require: true,
        trim: true,
        unique: true,
    },
    content: {
        type: String,
        require: true,
        trim: true,
    },
    done: {
        type: Boolean,
        default: false,
    },
},  { versionKey: false }
);

export default model("Task", taskSchema);