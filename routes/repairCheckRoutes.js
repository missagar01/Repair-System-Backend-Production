// routes/repairCheckRoutes.js

import express from "express";
import {
  fetchCheckTasks,
  fetchPendingCheck,
  fetchHistoryCheck,
  updateCheckTask
} from "../controllers/repairCheckController.js";

const router = express.Router();

router.get("/all", fetchCheckTasks);
router.get("/pending", fetchPendingCheck);
router.get("/history", fetchHistoryCheck);

// Material check update
router.put("/update/:taskNo", updateCheckTask);

export default router;
