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

export const getTask = async (id: string) => {
    try {
        const res = await axios.get("/tasks/"+id);
        return res.data; 
    } catch(error) {
        console.log("GET TASK", error);
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

export const updateTask = async (id: string, task: Task) => {
    try {
        const res = await axios.put("/tasks/"+id, task);
        return res.data;
    } catch(error) {
        console.log("UPDATE TASK", error);
    }
};

export const deleteTask = async (id: string) => {
    try {
        const res = await axios.delete("/tasks/"+id);
        return res.data;
    } catch(error) {
        console.log("DELETE TASK", error);
    }
};