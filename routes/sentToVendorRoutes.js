import express from "express";
import {
  fetchAllTasks,
  fetchPendingTasks,
  fetchHistoryTasks,
  updateTaskDetails,
} from "../controllers/sentToVendorController.js";

const router = express.Router();

router.get("/all", fetchAllTasks);
router.get("/pending", fetchPendingTasks);
router.get("/history", fetchHistoryTasks);

// Update task data
router.put("/update/:taskNo", updateTaskDetails);

export default router;
