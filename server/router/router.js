const express = require("express");
const router = express.Router();
const {getAllTodo,createTodo,updateTodo,deleteTodo}=require('../controller/todocontroller')

router.get("/", getAllTodo);
router.post("/createtodo", createTodo);
router.put("/updatetodo/:id", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);


module.exports=router;