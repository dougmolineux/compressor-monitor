const express = require('express');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Function to read and parse the metrics.csv file
function readCsvFile(filePath) {
    return new Promise((resolve, reject) => {
        const compressors = [];
        fs.createReadStream(filePath)
            .pipe(csv())
            .on('data', (row) => {
                compressors.push(row);
            })
            .on('end', () => {
                resolve(compressors);
            })
            .on('error', (err) => {
                reject(err);
            });
    });
}

// Serve the compressors data as JSON
app.get('/compressors', cors(), async (req, res) => {
    try {
        const filePath = path.join(__dirname, 'metrics.csv');
        const compressors = await readCsvFile(filePath);
        res.json({ compressors });
    } catch (error) {
        console.error('Error reading CSV file:', error);
        res.status(500).send('Internal Server Error');
    }
});

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const whitelist = ["http://localhost:3000"];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin || whitelist.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    credentials: true,
};
app.use(cors(corsOptions));

// Start the Express server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
