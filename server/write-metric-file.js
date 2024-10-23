const fs = require('fs');
const path = require('path');

function generateRandomLatLon() {
    // Approximate range of latitudes and longitudes for Oklahoma and Texas
    const latitude = (Math.random() * (37.0 - 25.5) + 25.5).toFixed(6); // Latitude range between 25.5 and 37.0
    const longitude = (Math.random() * (-93.5 - (-106.5)) + (-106.5)).toFixed(6); // Longitude range between -106.5 and -93.5
    return { latitude, longitude };
}

function generateCompressorMetrics(compressorId) {
    const location = generateRandomLatLon();
    return {
        id: compressorId,
        timestamp: new Date().toISOString(),
        engineTemperature: (Math.random() * (110 - 70) + 70).toFixed(2),
        vibrationEngineX: (Math.random() * (10 - 1) + 1).toFixed(2),
        vibrationEngineY: (Math.random() * (10 - 1) + 1).toFixed(2),
        vibrationEngineZ: (Math.random() * (10 - 1) + 1).toFixed(2),
        vibrationBearingX: (Math.random() * (8 - 1) + 1).toFixed(2),
        vibrationBearingY: (Math.random() * (8 - 1) + 1).toFixed(2),
        vibrationBearingZ: (Math.random() * (8 - 1) + 1).toFixed(2),
        vibrationCompressorHousingX: (Math.random() * (12 - 2) + 2).toFixed(2),
        vibrationCompressorHousingY: (Math.random() * (12 - 2) + 2).toFixed(2),
        vibrationCompressorHousingZ: (Math.random() * (12 - 2) + 2).toFixed(2),
        pressure: (Math.random() * (150 - 50) + 50).toFixed(2),
        oilLevel: (Math.random() * (100 - 50) + 50).toFixed(2),
        rpm: Math.floor(Math.random() * (3000 - 1000) + 1000),
        gasFlowRate: (Math.random() * (2000 - 500) + 500).toFixed(2),
        runtimeHours: Math.floor(Math.random() * (5000 - 1000) + 1000),
        latitude: location.latitude,  // Add latitude to the metrics
        longitude: location.longitude  // Add longitude to the metrics
    };
}

function generateCsvData(numRecords) {
    const headers = [
        'id',  // Include the id in the headers
        'timestamp',
        'engineTemperature',
        'vibrationEngineX',
        'vibrationEngineY',
        'vibrationEngineZ',
        'vibrationBearingX',
        'vibrationBearingY',
        'vibrationBearingZ',
        'vibrationCompressorHousingX',
        'vibrationCompressorHousingY',
        'vibrationCompressorHousingZ',
        'pressure',
        'oilLevel',
        'rpm',
        'gasFlowRate',
        'runtimeHours',
        'latitude',
        'longitude'
    ];

    const rows = [headers.join(',')];

    for (let i = 0; i < numRecords; i++) {
        const metrics = generateCompressorMetrics(i);
        const row = Object.values(metrics).join(',');
        rows.push(row);
    }
    return rows.join('\n');
}

function writeCsvFile(filename, data) {
    const filePath = path.join(__dirname, filename);
    fs.writeFileSync(filePath, data, 'utf8');
    console.log(`Data written to ${filename}`);
}

const csvData = generateCsvData(80);
writeCsvFile('metrics.csv', csvData);
