import express from "express";
import {
  getAllTasks,
  updateStoreInDetails
} from "../controllers/storeInController.js";

const router = express.Router();

// Fetch all rows from repair_system
router.get("/all", getAllTasks);

// Update Actual2, Received Quantity, Bill Image, etc.
router.put("/update/:taskNo", updateStoreInDetails);

export default router;
