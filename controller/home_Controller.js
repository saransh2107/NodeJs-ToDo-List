const mongoose = require('../config/mongoose');
const Task = require('../models/task');

//Get controller
module.exports.home = function (req, res) {
    Task.find({
    }).then(tasks => {
        return res.render('home', {
            title: "Tasks List",
            task_List: tasks
        });
    }).catch(err => {
        console.log(err);
    })
};

//Post Controller
module.exports.create = function (req, res) {
    var dob = new Date(req.body.date);
    var dobArr = dob.toDateString().split(' ');
    var dobFormat = dobArr[2] + ' ' + dobArr[1] + ' ' + dobArr[3];
    Task.create({
        description: req.body.description,
        category: req.body.category,
        date: dobFormat
    }).then(user => {
        console.log(user);
        return res.redirect('back');
    }).catch(err => {
        console.log(err);
    })
}


module.exports.delete = function (req, res) {
    let id = req.query.id;
    console.log(id);

    //Find the contact in the DB using Id and delete it
    Task.findByIdAndDelete(id).then(success => {
        console.log("Deleted Contact", success)
        return res.redirect('back');
    }).catch(err => {
        console.log(err);
    });
}
