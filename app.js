const express = require('express');
const mongoose = require('mongoose');
const dotenv=require('dotenv')
const authRoutes = require('./routes/authRoutes');
const meetingroomRoutes = require('./routes/meetingRoomRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
<<<<<<< HEAD
//const connectDB = require('../reservationsalle/Service/db');
=======
>>>>>>> 5b708b8f07b6bc8160e7a7705e44cf4c8e2e81c6


// Importez d'autres routes si nécessaire
dotenv.config()
const MONGODB_URI=process.env.MONGODB_URI
const PORT =process.env.PORT 

const app = express();
<<<<<<< HEAD
const PORT = process.env.PORT ;
const MONGODB_URI = process.env.MONGODB_URI;
=======
>>>>>>> 5b708b8f07b6bc8160e7a7705e44cf4c8e2e81c6

app.use(express.json());
app.use('/auth', authRoutes);
app.use('/meetingroom', meetingroomRoutes);
app.use('/reservation', reservationRoutes);

<<<<<<< HEAD
// Connect to MongoDB
=======
// Utilisez d'autres routes ici
>>>>>>> 5b708b8f07b6bc8160e7a7705e44cf4c8e2e81c6
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(err => console.error('Error connecting to MongoDB:', err));
<<<<<<< HEAD

=======
>>>>>>> 5b708b8f07b6bc8160e7a7705e44cf4c8e2e81c6

