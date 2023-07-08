const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect("mongodb+srv://siva90balan:4L6WPVNVirIKr3J1@dietapp0.0tldiad.mongodb.net/?retryWrites=true&w=majority")

mongoose.connection
    .on('open', () => console.log('MongoDB connected'))
    .on('close', () => console.log('MongoDB disconnected'))
    .on('error', (error) => console.log('MongoDB connection error', error))