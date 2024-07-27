// water.js

document.addEventListener('DOMContentLoaded', function() {
    console.log('Water Departments page loaded');
    // Add any specific JavaScript needed for the Water Departments page here
});
document.getElementById('water-supply-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const PIPELINE_DIAMETER_CM = 10;
    const METERS_TO_LITERS = 1000.0;

    const totalWaterSuppliedLiters = parseFloat(document.getElementById('totalWaterSupplied').value);
    const totalWaterReceivedLiters = parseFloat(document.getElementById('totalWaterReceived').value);
    const location = document.getElementById('location').value;

    const pipelineDiameterM = PIPELINE_DIAMETER_CM / 100.0;
    const radiusM = pipelineDiameterM / 2.0;

    const volumeM3PerMeter = Math.PI * Math.pow(radiusM, 2);
    const volumeLitersPerMeter = volumeM3PerMeter * METERS_TO_LITERS;
    const suppliedVolume = totalWaterSuppliedLiters;
    const receivedVolume = totalWaterReceivedLiters;

    const leakage = suppliedVolume - receivedVolume;

    const litreCounterSupplied = Math.floor(suppliedVolume / 100);
    const litreCounterReceived = Math.floor(receivedVolume / 100);

    let reportMessage = `
        <h3>Pipeline Report</h3>
        <p>Pipeline diameter: ${PIPELINE_DIAMETER_CM.toFixed(2)} cm</p>
        <p>Volume per meter of height: ${volumeM3PerMeter.toFixed(2)} cubic meters</p>
        <p>Volume per meter of height: ${volumeLitersPerMeter.toFixed(2)} liters</p>
        <p>Total water supplied: ${suppliedVolume.toFixed(2)} liters</p>
        <p>Total water received: ${receivedVolume.toFixed(2)} liters</p>
        <p>Litres Counter for supplied (every 100 liters): ${litreCounterSupplied}</p>
        <p>Litres Counter for received (every 100 liters): ${litreCounterReceived}</p>`;

    if (leakage > 0) {
        reportMessage += `
            <h3>Leakage Report</h3>
            <p>Leakage detected: ${leakage.toFixed(2)} liters</p>
            <p>Location: ${location}</p>
            <p>Report NOTED</p>`;
    } else {
        reportMessage += `<p>Water supplied successfully! No leakage detected.</p>`;
    }

    document.getElementById('report').innerHTML = reportMessage;
});
