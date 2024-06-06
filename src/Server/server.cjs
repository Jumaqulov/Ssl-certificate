const express = require('express');
const app = express();

// Mavjud routelar
app.get('/', (req, res) => {
    res.send('Bosh sahifa');
});

// Yana boshqa routelar
app.get('/about', (req, res) => {
    res.send('Haqida sahifa');
});

// Universal 404 handler
app.use('*', (req, res) => {
    res.status(404).send('Sahifa topilmadi');
});

// Serverni eshitish
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server ${PORT} portda ishga tushdi`);
});