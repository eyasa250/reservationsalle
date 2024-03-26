const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const authRoutes = require('./routes/authRoutes');
const meetingroomRoutes = require('./routes/meetingRoomRoutes');
const reservationRoutes = require('./routes/reservationRoutes');


// Importez d'autres routes si nécessaire
dotenv.config()
const MONGODB_URI=process.env.MONGODB_URI
const PORT =process.env.PORT 

const app = express();

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/meetingroom', meetingroomRoutes);
app.use('/reservation', reservationRoutes);

// Utilisez d'autres routes ici
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));

