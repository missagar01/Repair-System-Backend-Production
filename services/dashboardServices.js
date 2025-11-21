import pool from "../config/db.js";

// 1️⃣ Fetch all tasks
export const fetchAllTasks = async () => {
  const query = `
    SELECT *
    FROM repair_system
    ORDER BY id DESC;
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// 2️⃣ Pending → actual_4 IS NULL OR status != 'done'
export const fetchPendingTasks = async () => {
  const query = `
    SELECT *
    FROM repair_system
    WHERE status IS NULL OR status != 'done';
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// 3️⃣ Completed → status = 'done'
export const fetchCompletedTasks = async () => {
  const query = `
    SELECT *
    FROM repair_system
    WHERE status = 'done';
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// 4️⃣ Department-wise count
export const fetchDepartmentWiseCount = async () => {
  const query = `
    SELECT department, COUNT(*) AS count
    FROM repair_system
    GROUP BY department
    ORDER BY department ASC;
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// 5️⃣ Payment Type Distribution
export const fetchPaymentTypeDistribution = async () => {
  const query = `
    SELECT payment_type AS type, SUM(total_bill_amount) AS amount
    FROM repair_system
    GROUP BY payment_type;
  `;
  const { rows } = await pool.query(query);
  return rows;
};

// 6️⃣ Vendor-wise repair cost
export const fetchVendorWiseCosts = async () => {
  const query = `
    SELECT vendor_name AS vendor, SUM(total_bill_amount) AS cost
    FROM repair_system
    GROUP BY vendor_name
    ORDER BY cost DESC
    LIMIT 5;
  `;
  const { rows } = await pool.query(query);
  return rows;
};
