import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import repairRoutes from "./routes/repairRoutes.js";
import repairOptionsRoutes from "./routes/repairOptionsRoutes.js";
import repairSystemRoutes from "./routes/sentToVendorRoutes.js";
import repairCheckRoutes from "./routes/repairCheckRoutes.js";
import storeInRoutes from "./routes/storeInRoutes.js";
import paymentRoutes from "./routes/paymentRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/repair", repairRoutes);
app.use("/api/repair-options", repairOptionsRoutes);
app.use("/api/repair-system", repairSystemRoutes);
app.use("/api/repair-check", repairCheckRoutes);
app.use("/api/store-in", storeInRoutes);
app.use("/api/payment", paymentRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/auth", authRoutes);


app.get("/", (req, res) => {
  res.send("Repair System API Working 🚀");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on port ${PORT}`)
);
