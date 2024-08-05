import express from "express";
import agencyRoutes from './routes/agencyRoutes.js';
import alertRoutes from './routes/alertRoutes.js';
import disasterRoutes from './routes/disasterRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json());
app.use(cors({
  origin: 'https://rescueagencycollab-yakshine-anannyas-projects.vercel.app',
}));

// Routes
app.use('agency', agencyRoutes);
app.use('alert', alertRoutes);
app.use('disaster', disasterRoutes);
app.use('resource', resourceRoutes);

// Rest Api  
app.get('/', (req, res) => {
  res.send("<h1>Welcome to Rescue Connect</h1>");
});

// Global Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

export default app;
