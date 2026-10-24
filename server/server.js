const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const apiRouter = require('./routes/api');

const app = express();
const PORT = process.env.PORT || 5000;
const CORS_ORIGIN = process.env.CORS_ORIGIN || '*';

// Security and Middleware
app.use(cors({
  origin: CORS_ORIGIN,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(express.json());

// API Gateway routes
app.use('/api', apiRouter);

// Serve static frontend build if present
const distPath = path.join(__dirname, '../dist');
app.use(express.static(distPath));

// Fallback to index.html for SPA client-side routing
app.use((req, res, next) => {
  if (req.path.startsWith('/api')) return next();
  res.sendFile(path.join(distPath, 'index.html'), (err) => {
    if (err) {
      res.status(200).send(`
        <!DOCTYPE html>
        <html>
          <head><title>PO Mastery Academy API</title></head>
          <body style="font-family: sans-serif; padding: 2rem;">
            <h2>PO Mastery Academy API Server</h2>
            <p>Status: Active</p>
            <p>API Endpoint: <a href="/api/health">/api/health</a></p>
            <p>Run frontend client with <code>npm run dev</code></p>
          </body>
        </html>
      `);
    }
  });
});

const HOST = process.env.HOST || '0.0.0.0';

if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`[PO Mastery Academy API] running on http://${HOST}:${PORT}`);
  });
}

module.exports = app;
