import express from "express";
import db from "../db.js";
import prisma from "../PrismaClient.js";

const router = express.Router();

// Get all todos
router.get("/", async (req, res) => {

  try {
    const todos = await prisma.todo.findMany({
        where : {
            user_id : req.userId
        }
    })

    res.json({ todos });

  } catch (err) {
    console.log(err.message);
    res.status(503).json({ message: err.message });
  }
});

// Create a new todo
router.post("/", async (req, res) => {
    const {task} = req.body;

    const todo = await prisma.todo.create({
        data : {
            task : task,
            user_id : req.userId
        }
    })

    res.json(todo)

});


// Update a  todo
router.put("/:id", async (req, res) => {
    const {id} = req.params
    const {completed} = req.body

    const result = await prisma.todo.updateMany({
        where: {
            id: parseInt(id),
            user_id: req.userId
        },
        data: {
            completed: completed
        }
    })


     if (result.count === 0) {
        return res.status(404).json({
            message: "Todo not found"
        });
    }    

    res.json({message : "Todo updated"})
});

// Delete a todo
router.delete("/:id", async(req, res) => {
    const {id} = req.params

    await prisma.todo.delete({
        where: {
            id: parseInt(id),
            user_id: req.userId
        }
    })

    res.json({message : "Todo deleted"})
});

export default router;

