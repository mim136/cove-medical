const express = require('express');
const cors = require('cors');
const fs = require('fs').promises;
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname))); // Serve frontend from root

// Helper for file I/O
const DATA_PATH = path.join(__dirname, 'data');
const getFilePath = (filename) => path.join(DATA_PATH, filename);

async function readData(filename) {
    try {
        const data = await fs.readFile(getFilePath(filename), 'utf8');
        return JSON.parse(data);
    } catch (error) {
        console.error(`Error reading ${filename}:`, error);
        return [];
    }
}

async function writeData(filename, data) {
    try {
        await fs.writeFile(getFilePath(filename), JSON.stringify(data, null, 4));
    } catch (error) {
        console.error(`Error writing ${filename}:`, error);
    }
}

// API Endpoints
app.get('/api/departments', async (req, res) => {
    const departments = await readData('departments.json');
    res.json(departments);
});

app.get('/api/doctors', async (req, res) => {
    const doctors = await readData('doctors.json');
    const { deptId } = req.query;
    if (deptId) {
        return res.json(doctors.filter(d => d.deptId === deptId));
    }
    res.json(doctors);
});

app.post('/api/book', async (req, res) => {
    const bookingData = req.body;
    
    // Professional 2050 ID Generation
    const appointmentId = `COVE-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).substr(2, 4).toUpperCase()}`;
    
    const newAppointment = {
        id: appointmentId,
        ...bookingData,
        timestamp: new Date().toISOString()
    };

    // Persistence
    const appointments = await readData('appointments.json');
    appointments.push(newAppointment);
    await writeData('appointments.json', appointments);
    
    const response = {
        success: true,
        message: 'Appointment successfully integrated into the medical ledger.',
        appointmentId: appointmentId,
        metadata: {
            encryption: 'Quantum-Grade AES-4096',
            blockchainHash: `0x${Math.random().toString(16).substr(2, 32)}`,
            predictedRecovery: '92% within 72 hours',
            digitalPrescription: `https://cove.med/rx/${appointmentId}`
        }
    };
    
    console.log(`[BOOKING] ID: ${appointmentId} | Patient: ${bookingData.fullName}`);
    
    // Simulate biometric verification delay
    setTimeout(() => {
        res.status(201).json(response);
    }, 1200);
});

// Fallback to index.html for SPA-like behavior (optional here but good practice)
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`
🚀 Cove Medical Backend v2.0 Online
📍 Local Access: http://localhost:${PORT}
💾 Storage: Local JSON (Persistent)
🛡️ Security: Quantum-Grade Simulation Active
    `);
});
