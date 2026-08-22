import pool from '../db/connection.js';

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.userId; // Provided by auth middleware

    const result = await pool.query(
      `SELECT id, first_name, last_name, email, phone, city, country, 
       additional_information, profile_photo, created_at 
       FROM users WHERE id = $1`,
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Get Current User Error:', error);
    res.status(500).json({ error: 'An error occurred fetching user data.' });
  }
};

export const updateCurrentUser = async (req, res) => {
  try {
    const userId = req.userId;
    const { first_name, last_name, phone, city, country, additional_information } = req.body;

    // Build dynamic update query (basic version)
    const result = await pool.query(
      `UPDATE users 
       SET first_name = COALESCE($1, first_name),
           last_name = COALESCE($2, last_name),
           phone = COALESCE($3, phone),
           city = COALESCE($4, city),
           country = COALESCE($5, country),
           additional_information = COALESCE($6, additional_information),
           updated_at = CURRENT_TIMESTAMP
       WHERE id = $7
       RETURNING id, first_name, last_name, email, phone, city, country, additional_information`,
      [first_name, last_name, phone, city, country, additional_information, userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'User not found.' });
    }

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Update Current User Error:', error);
    res.status(500).json({ error: 'An error occurred updating user data.' });
  }
};
