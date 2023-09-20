const mongoose=require('mongoose');
const toDoListSchema=new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
    },
    date:{
        type:String,
    }
});

const task=mongoose.model('task',toDoListSchema);
module.exports=task;