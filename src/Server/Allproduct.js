const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const cors = require('cors');

const app = express();

app.use(cors());

const port = 5000;

app.use('/api', createProxyMiddleware({ target: 'https://my.gogetssl.com', changeOrigin: true }));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});