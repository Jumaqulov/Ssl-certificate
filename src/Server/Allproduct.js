const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors'); // Kutubxonani chaqiring

const app = express();

// CORS ni qo'llash
app.use(cors());

// Server portini tanlash
const port = 5000;

// Kutubxonani qo'shish
app.use('/api', createProxyMiddleware({ target: 'https://my.gogetssl.com', changeOrigin: true }));

// Serverni tinglash
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
