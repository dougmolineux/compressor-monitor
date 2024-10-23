function generateCompressorMetrics() {
    const compressorMetrics = {
        timestamp: new Date().toISOString(),
        engineTemperature: (Math.random() * (110 - 70) + 70).toFixed(2), // in °C, range from 70°C to 110°C
        vibrationLevels: {
            engine: {
                x: (Math.random() * (10 - 1) + 1).toFixed(2), // vibration in mm/s, range from 1 to 10 mm/s
                y: (Math.random() * (10 - 1) + 1).toFixed(2),
                z: (Math.random() * (10 - 1) + 1).toFixed(2)
            },
            bearing: {
                x: (Math.random() * (8 - 1) + 1).toFixed(2), // vibration for bearings, slightly lower range
                y: (Math.random() * (8 - 1) + 1).toFixed(2),
                z: (Math.random() * (8 - 1) + 1).toFixed(2)
            },
            compressorHousing: {
                x: (Math.random() * (12 - 2) + 2).toFixed(2), // slightly higher range for the compressor housing
                y: (Math.random() * (12 - 2) + 2).toFixed(2),
                z: (Math.random() * (12 - 2) + 2).toFixed(2)
            }
        },
        pressure: (Math.random() * (150 - 50) + 50).toFixed(2), // in bar, range from 50 to 150 bar
        oilLevel: (Math.random() * (100 - 50) + 50).toFixed(2), // in percentage, range from 50% to 100%
        rpm: Math.floor(Math.random() * (3000 - 1000) + 1000), // revolutions per minute, range from 1000 to 3000
        gasFlowRate: (Math.random() * (2000 - 500) + 500).toFixed(2), // in m³/h, range from 500 to 2000 m³/h
        runtimeHours: Math.floor(Math.random() * (5000 - 1000) + 1000) // in hours, range from 1000 to 5000 hours
    };

    return compressorMetrics;
}

console.log(generateCompressorMetrics());