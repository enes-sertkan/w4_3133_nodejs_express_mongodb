const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

//TODO - Replace you Connection String here
mongoose.connect('mongodb+srv://enessertkan:Password123@cluster0.55mfjdg.mongodb.net/?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(success => {
  console.log(`MongoDB connected ${success}`)
}).catch(err => {
  console.log(`Error while MongoDB connection ${err}`)
});

app.use(employeeRouter);


app.listen(8081, () => { console.log('Server is running...') });