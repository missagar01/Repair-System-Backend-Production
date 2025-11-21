// controllers/authController.js
import pool from "../config/db.js";
import bcrypt from "bcrypt";

export const authenticateUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Fetch user
    const query = `SELECT * FROM users WHERE LOWER(user_name) = LOWER($1);`;
    const { rows } = await pool.query(query, [username]);

    if (rows.length === 0) {
      return res.status(401).json({ success: false, message: "Invalid Username" });
    }

    const user = rows[0];

    // Password check
    const match = password === user.password;  
    // If you use bcrypt:
    // const match = await bcrypt.compare(password, user.password);

    if (!match) {
      return res.status(401).json({ success: false, message: "Invalid Password" });
    }

    // Prepare access list
    const accessList = user.page_access || [];

    return res.json({
      success: true,
      user: {
        id: user.id,
        name: user.user_name,
        role: user.role,
        access: accessList
      }
    });

  } catch (error) {
    console.error("Auth error:", error);
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
