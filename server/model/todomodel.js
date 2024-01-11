const mongoose = require('mongoose')


const TodoSchema = new mongoose.Schema({
    task: {
        type: "String",
        required: true,
    },
    description: {
        type: "String",
    },
    completed: Boolean,

    reminder: {
        type:String
   
  },
})

const TodoModel = new mongoose.model('Todomodel',TodoSchema)
module.exports=TodoModel;