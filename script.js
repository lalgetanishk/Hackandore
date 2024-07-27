// script.js

// Handle form submission
document.getElementById('data-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Extract values from form fields
    const householdId = document.getElementById('household').value;
    const suppliedWater = parseFloat(document.getElementById('Supplied-Water').value);
    const receivedWater = parseFloat(document.getElementById('Received-Water').value);

    // Call a function from water.js to send data to the backend
    submitWaterData(householdId, suppliedWater, receivedWater);
});

// Handle report generation
document.getElementById('generate-report').addEventListener('click', function() {
    // Call a function from water.js to fetch and display the report
    generateReport();
});
