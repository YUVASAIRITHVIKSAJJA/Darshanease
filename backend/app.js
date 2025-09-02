const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

const userrouter = require('./routes/userroutes');
const adminrouter = require('./routes/adminroutes');
const templereprouter = require('./routes/templereproutes');
const servicerouter = require('./routes/serviceroutes');
const donationrouter = require('./routes/donationroutes');
const announcementrouter = require('./routes/announcementroutes');
const contactrouter = require('./routes/contactroutes');

dotenv.config();

const app = express();
const port = 5500;

// Middleware
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

// Routes
app.use('/users', userrouter);
app.use('/admin', adminrouter);
app.use('/temple', templereprouter);
app.use('/services', servicerouter);
app.use('/donations', donationrouter);
app.use('/announcements', announcementrouter);
app.use('/contacts', contactrouter);

// MongoDB connection
mongoose.connect(process.env.mongo_uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log('Connection established successfully!');
})
.catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
});

// Start server
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
