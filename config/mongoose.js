const mongoose=require('mongoose');
let url="mongodb+srv://saranshbatham:admin@tasklist.dmgt0qx.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(url);
const db=mongoose.connection;
db.on('error',console.error.bind(console,"Error connecting to DB"));

db.once('open',function(){
    console.log("Successfully connecting to DB");
})