import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const app = express();

// Faylning hozirgi katalogini olish uchun
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Handle React routing, return all requests to React app
app.get('*', (req, res, next) => {
  const filePath = path.join(__dirname, 'client/build', 'index.html');
  if (req.path === '/404') {
    res.status(404).sendFile(filePath, err => {
      if (err) {
        next(err);
      }
    });
  } else {
    res.sendFile(filePath, err => {
      if (err) {
        next(err);
      }
    });
  }
});

// Handle 404 errors explicitly
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});