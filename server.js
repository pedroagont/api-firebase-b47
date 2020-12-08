require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ENDPOINTS
app.get('/', (req, res) => {
  res.send('API Firebase B47');
})

// RUTAS API
app.use('/api/v1', require('./router'));

// LISTENER
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
