const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static('public'));

// API endpoint to handle form submission
app.post('/submit-data', (req, res) => {
    const { household, waterUsage, suppliedWater, receivedWater } = req.body;
    console.log(`Household ID: ${household}`);
    console.log(`Water Usage: ${waterUsage}`);
    console.log(`Supplied Water: ${suppliedWater}`);
    console.log(`Received Water: ${receivedWater}`);

    // Example logic for leakage detection
    const leakage = suppliedWater - receivedWater;
    let reportMessage = 'No leakage detected';

    if (leakage > 0) {
        reportMessage = `Leakage Detected: ${leakage} liters`;
    }

    res.json({ message: reportMessage });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
