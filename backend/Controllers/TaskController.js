const TaskModel = require("../Models/TaskModel");
// const { route } = require("../Routes/TaskRouter");

const createTask = async (req, res) => {
  const data = req.body;
  try {
    console.log("body : ", data);
    const newTask = new TaskModel(data);
    console.log("newTask : ", newTask);
    await newTask.save();
    res.status(201).json({ message: "Task is Crated", success: true });
  } catch (err) {
    res.status(500).json({ message: "Failed to create  tsk", success: false });
  }
};

// get all task
const fetchAllTask = async (req, res) => {
  try {
    const data = await TaskModel.find({}); // Add 'await' here
    res.status(200).json({ message: "All Tasks", success: true, data }); // Use 200 for successful GET requests
  } catch (err) {
    console.error("Error fetching tasks: ", err); // Log the error for debugging
    res
      .status(500)
      .json({ message: "Failed to fetch all tasks", success: false });
  }
};
// // update a task
// const updateTaskById = async (req, res) => {
//   const id = req.params.id;
//   const body = req.body;
//   const obj = { $set: { ...body } };
//   try {
//     await TaskModel.findByIdAndUpdate({id,obj});
//     res.status(200).json({ message: " Task updated", success: true }); // Use 200 for successful GET requests
//   } catch (err) {
//     console.error("Error fetching tasks: ", err); // Log the error for debugging
//     res
//       .status(500)
//       .json({ message: "Failed to update  tasks", success: false });
//   }
// };
const updateTaskById = async (req, res) => {
  const id = req.params.id; // Extract the ID from the URL parameters
  const body = req.body; // Extract the body data from the request

  try {
    // Pass the ID and update object as separate arguments
    const updatedTask = await TaskModel.findByIdAndUpdate(
      id, // The ID of the document to update
      { $set: { ...body } }, // The update object
      { new: true } // Return the updated document
    );

    // Handle the case where the task is not found
    if (!updatedTask) {
      return res
        .status(404)
        .json({ message: "Task not found", success: false });
    }

    res
      .status(200)
      .json({ message: "Task updated", success: true, data: updatedTask });
  } catch (err) {
    console.error("Error updating task: ", err); // Log the error for debugging
    res.status(500).json({ message: "Failed to update task", success: false });
  }
};

const deleteTaskById = async (req, res) => {
  const id = req.params.id; // Extract the task ID from the URL parameters

  try {
    const deletedTask = await TaskModel.findByIdAndDelete(id); // Find and delete the task by ID

    if (!deletedTask) {
      return res
        .status(404)
        .json({ message: "Task not found", success: false });
    }

    res.status(200).json({
      message: "Task deleted successfully",
      success: true,
      data: deletedTask,
    });
  } catch (err) {
    console.error("Error deleting task: ", err); // Log the error for de
    // bugging
    res.status(500).json({ message: "Failed to delete task", success: false });
  }
};

module.exports = {
  createTask,
  fetchAllTask,
  updateTaskById,
  deleteTaskById,
};
