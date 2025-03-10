require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const placeRoutes = require('./routes/placeRoutes');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

app.use('/api/places', placeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});