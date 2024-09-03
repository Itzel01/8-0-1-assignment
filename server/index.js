const express = require('express');
const path = require('path')
const app = express();

const pathToDistFolder = path.join(__dirname, '../fullstack-app/dist');
const serveStatic = express.static(pathToDistFolder);

const logRoutes = (req, res, next) => {
  const time = new Date().toLocaleString();
  console.log(`${req.method}: ${req.originalUrl} - ${time}`);
  next(); // Passes the request to the next middleware/controller
};

const serveHello = (req, res, next) => {
  const name = req.query.name || "stranger";
  res.send(`Hello, ${name}!`);
};

app.use(logRoutes);
app.use(serveStatic);

app.get('/api/hello', serveHello);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
})