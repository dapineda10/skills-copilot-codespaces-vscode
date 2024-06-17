//Create new web server
const express = require('express');
const app = express();
//Create a new server that listens on port 3000
app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
//Create a new route for GET requests to /comments
app.get('/comments', (req, res) => {
    res.send('This is the comments page');
});
