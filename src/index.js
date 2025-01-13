const express = require('express');
const app = express();
const port = 3000;

// Simple API endpoint
app.get('/my_function', (req, res) => {
    res.json({ message: 'Hello from my_function!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
