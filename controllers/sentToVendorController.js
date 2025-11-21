import {
  getAllRepairTasks,
  getPendingRepairTasks,
  getHistoryRepairTasks,
  updateRepairTask,
} from "../services/sentToVendorServices.js";

// -------------------------------------------
// GET ALL TASKS
// -------------------------------------------
export const fetchAllTasks = async (req, res) => {
  try {
    const tasks = await getAllRepairTasks();
    return res.json({ success: true, tasks });
  } catch (err) {
    console.log("❌ Fetch All Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// -------------------------------------------
// GET PENDING TASKS
// -------------------------------------------
export const fetchPendingTasks = async (req, res) => {
  try {
    const tasks = await getPendingRepairTasks();
    return res.json({ success: true, tasks });
  } catch (err) {
    console.log("❌ Pending Fetch Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// -------------------------------------------
// GET HISTORY TASKS
// -------------------------------------------
export const fetchHistoryTasks = async (req, res) => {
  try {
    const tasks = await getHistoryRepairTasks();
    return res.json({ success: true, tasks });
  } catch (err) {
    console.log("❌ History Fetch Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

// -------------------------------------------
// UPDATE TASK (SEND MACHINE)
// -------------------------------------------
export const updateTaskDetails = async (req, res) => {
  try {
    const { taskNo } = req.params;
    const body = req.body;

    const updated = await updateRepairTask(taskNo, body);

    return res.json({
      success: true,
      message: "Task updated successfully",
      updated,
    });
  } catch (err) {
    console.log("❌ Update Error:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
