// Route file for PR 2
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'Hello from hello.js route!' });
});

router.get('/:name', (req, res) => {
  res.json({ message: `Hello ${req.params.name}!` });
});

module.exports = router;