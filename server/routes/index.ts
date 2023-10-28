import { Router } from "express";
const router = Router();

router.get('/tasks', (req, res) => {
    res.send("Tasks");
});

router.get('/tasks/:id', (req, res) => {
    res.send("Task ID");
});

router.post('/tasks', (req, res) => {
    res.send("Post Task");
});

router.put("/tasks/:id", (req, res) => {
    res.send("Update Task");
});

router.delete('/tasks/:id', (req, res) => {
    res.send("Delete Task");
});

export default router;