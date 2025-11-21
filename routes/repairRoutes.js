// routes/repairRoutes.js
import express from "express";
import { createRepairTask, getAllRepairTasks } from "../controllers/repairController.js";

const router = express.Router();

// POST: insert new repair
router.post("/create", createRepairTask);
router.get("/all", getAllRepairTasks);

export default router;
