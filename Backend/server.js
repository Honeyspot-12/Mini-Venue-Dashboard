const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config');

const app = express();
dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/venues', require('./routes/venues'));
app.use('/bookings', require('./routes/bookings'));

const PORT =process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))