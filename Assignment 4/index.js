// Load express
const express = require('express');
const app = express();
const PORT = 3000;

// ===== Middleware =====
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

// ===== Routes =====
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page!');
});

app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

// ===== 404 Handler =====
app.use((req, res) => {
  res.status(404).send('404 - Page not found');
});

// ===== Start Server =====
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
