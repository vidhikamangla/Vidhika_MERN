const Task = require("../Models/Task");

const createTask = async (req, res, next) => {
  try {
    const { title, description } = req.body;

    const newTask = new Task({
      title,
      description,
      isCompleted: false,
      createdAt: Date.now(),
      updatedAt : Date.now()
    });

    const result = await newTask.save();
    if (!result) {
      res.send("Could not save task. Try Again. :( ");
    } else {
      res.send("Task Saved :) ");
    }
  } catch (err) {
    console.log(err);
  }
};

const viewTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (err) {
    console.log(err);
  }
};

const updateTasks = async (req, res, next) => {
  try {
    const { title, description } = req.body;
    if (title && description) {
      const result = await Task.findOneAndUpdate({_id : req.params.id},{
        title: title,
        description: description,
        updatedAt : Date.now()
      });
      if (result) {
        res.send("Task Updated :)");
      } else {
        res.send("Could not update task. Try again. :(");
      }
    } else {
        res.send("Enter the task and description properly :/ ");
    }
  } catch (err) {
    console.log(err);
  }
};

const deleteTasks = async (req, res, next) => {
  try {
    const taskID = req.params.id;
    const task = await Task.findByIdAndDelete({ _id: taskID });
    if (task) {
        res.send("Task deleted :)");
    } else {
        res.send("Couldnt delete task. Try again. :( ");
    }
  } catch (err) {
    console.log(err);
  }
};


const completeTask = async(req,res,next)=>{
  try{

    const id = req.params.id;
    const result = await Task.findOneAndUpdate({_id : id}, {isCompleted : true}, { new: true });
    if(result){
      res.json(result);

    }else{
      res.send('Something went wrong :(');
    }

  }catch(err){
    console.log(err);
  }
}

const getCompletedTasks = async(req,res,next)=>{
  try{

    const tasks = await Task.find({isCompleted : true});
    res.json(tasks);

  }catch(err){
    console.log(err);
  }
}

const getIncompleteTasks = async(req,res,next)=>{
  try{

    const tasks = await Task.find({isCompleted : false});
    res.json(tasks);
  }catch(err){
    console.log(err);
  }
}

module.exports = { createTask , viewTasks, updateTasks, deleteTasks, completeTask, getCompletedTasks, getIncompleteTasks};