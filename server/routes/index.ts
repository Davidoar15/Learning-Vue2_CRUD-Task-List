import { Router } from "express";
import Task from "../models/task";

const router = Router();

router.get('/tasks',  async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch(error) {
        console.log("GET TASKS", error);
        return res.status(500).json({ message: "Internal Server Error" })
    };
});

router.get('/tasks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findById(id);

        return task 
            ? res.status(200).json(task)
            : res.status(404).send("Task not Found");
    } catch(error) {
        console.log("GET TASK", error);
        return res.status(500).json({ message: "Internal Server Error" })
    };
});

router.post('/tasks', async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) return res.status(401).send("Missing Data");

        const task = new Task({ 
            title, 
            content, 
        });
        await task.save();
    
        return res.status(200).json(task);
    } catch(error) {
        console.log("POST TASK", error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

router.put("/tasks/:id", async (req, res) => {
    const { id } = req.params;
    const { title, content, done } = req.body;

    try {
        if (!title || !content) return res.status(401).send("Missing Data");

        const updatedTask = await Task.findByIdAndUpdate(id, {
            title, 
            content,
            done,
        }, { new: true });

        return res.status(200).json(updatedTask);
    } catch(error) {
        console.log("UPDATE TASK", error);
        return res.status(500).json({ message: "Internal Server Error" })
    };
});

router.delete('/tasks/:id', async (req, res) => {
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        return task
            ? res.status(200).json({ TaskDelete: { task } })
            : res.status(400).send("Task Not Found");
    } catch(error) {
        console.log("DELETE TASK", error);
        return res.status(500).json({ message: "Internal Server Error" });
    };
});

export default router;