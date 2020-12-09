require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const path = require('path');

// MIDDLEWARE
app.use(cors());
app.use(express.json());

// ENDPOINTS
app.get('/', (req, res) => {
  res.send('API Firebase B47 <a href="/docs">/docs</a> 📄');
})

// DOCUMENTACIÓN
app.get('/docs', (req, res) => {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// RUTAS API
app.use('/api/v1', require('./router'));

// LISTENER
app.listen(port, () => console.log(`App listening at http://localhost:${port}`));
