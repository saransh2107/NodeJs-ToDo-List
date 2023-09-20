const express=require('express');
//importing the Router module
const router=express.Router();
const Task=require('../models/task');

//importing the homecontroller(views) inside the route
const homeController=require('../controller/home_Controller');


router.get('/',homeController.home);
router.post('/create-task',homeController.create);
router.get('/delete-task/',homeController.delete);
module.exports=router;