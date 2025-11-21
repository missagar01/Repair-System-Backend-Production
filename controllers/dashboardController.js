import {
  fetchAllTasks,
  fetchPendingTasks,
  fetchCompletedTasks,
  fetchDepartmentWiseCount,
  fetchPaymentTypeDistribution,
  fetchVendorWiseCosts
} from "../services/dashboardServices.js";

export const getDashboardMetrics = async (req, res) => {
  try {
    const tasks = await fetchAllTasks();
    const pending = await fetchPendingTasks();
    const completed = await fetchCompletedTasks();
    const deptWise = await fetchDepartmentWiseCount();
    const paymentDist = await fetchPaymentTypeDistribution();
    const vendorCosts = await fetchVendorWiseCosts();

    return res.json({
      success: true,
      data: {
        tasks,
        pendingCount: pending.length,
        completedCount: completed.length,
        totalRepairCost: tasks.reduce((a, b) => a + Number(b.total_bill_amount || 0), 0),
        departmentStatus: deptWise,
        paymentTypeDistribution: paymentDist,
        vendorWiseCosts: vendorCosts
      }
    });

  } catch (error) {
    console.error("Dashboard Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
