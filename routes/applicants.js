const express = require('express');
const router = express.Router();
const db = require('../db/database');

// POST /apply - Create applicant
router.post('/apply', (req, res) => {
  const { name, email, phone, password } = req.body;
  const stmt = `INSERT INTO applicants (name, email, phone, password) VALUES (?, ?, ?, ?)`;
  db.run(stmt, [name, email, phone, password], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Application submitted successfully' });
  });
});

// GET /applicants - Get all applicants
router.get('/applicants', (req, res) => {
  db.all(`SELECT * FROM applicants`, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

module.exports = router;
