import { Task } from "@/interfaces/task";
import axios from "./axios";

export const getTasks = async () => {
    try {
        const res = await axios.get("/tasks");
        return res.data; 
    } catch(error) {
        console.log("GET TASKS", error);
    }
};

export const createTask = async (task: Task) => {
    try {
        const res = await axios.post('/tasks', task);
        return res.data;
    } catch(error) {
        console.log("CREATE TASK", error);
    }
};