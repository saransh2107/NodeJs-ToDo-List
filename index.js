const exp = require('constants');
const express=require('express');
const path=require('path');
const port=8000;


const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname,'assets')));




app.use('/',require('./routes'));

app.listen(port, function (err) {
    if (err) {
        console.log("Error in running server", err);
    }
    console.log("Express running on", port);
})
