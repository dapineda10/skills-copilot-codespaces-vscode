// Create web server
// Import express and body-parser
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
// Parse JSON (application/json content-type)
app.use(bodyParser.json());
// Array to store comments
const comments = [];
// GET /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});
// POST /comments
app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.status(201).json(comment);
});
// Start server
app.listen(3000, () => {
    console.log('Server started');
});