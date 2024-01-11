const TodoModel = require('../model/todomodel')


 const getAllTodo=async(req,res)=>
{
   try
   {
     const todolist = await TodoModel.find()
     res.status(201).json({msg:'todolist',todolist})
   }
   catch(error)
   {
    res.status(502).json({msg:'something went wrong while getting all list',error})
   }
    
}
 const createTodo=async(req,res)=>
{
   
   try
   {
     const task =  req.body.task
     const reminder = req.body.reminder
     console.log(reminder)

     const newTodo = new TodoModel({
        task,
        reminder,
      });
    
     
     
    
     console.log(task,"title")
   

    
     const createdtodo = await TodoModel.create(newTodo)
     console.log(createdtodo)
     res.status(201).json({msg:'todo created',createdtodo})
   }
   catch(error)
   {
    res.json({msg:'something went wrong while creating todo',error})
   }
    
}
 const updateTodo=async(req,res)=>
{
   try
   {
     const {id} =req.params;
     const{compeleted} = req.body;

     const updatedtodo = await TodoModel.findByIdAndUpdate(id,{compeleted },{new:true})

     res.status(201).json({msg:'todolist',idtodolist})
   }
   catch(error)
   {
    res.status(502).json({msg:'something went wrong while updating todo',error})
   }
    
}
 const deleteTodo=async(req,res)=>
{
   try
   {
    const idtodolist = await TodoModel.findById( req.params.id)

    const delteted = await TodoModel.findByIdAndDelete(idtodolist)

    res.status(201).json({msg:'deleted item',delteted})
   }
   catch(error)
   {
    res.status(502).json({msg:'something went wrong while getting all list',error})
   }
    
}

module.exports={getAllTodo,createTodo,deleteTodo,updateTodo}