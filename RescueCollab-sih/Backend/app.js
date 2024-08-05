import express  from "express";
import agencyRoutes from './routes/agencyRoutes.js';
import alertRoutes from './routes/alertRoutes.js';
import disasterRoutes from './routes/disasterRoutes.js';
import resourecRoutes from './routes/resourceRoutes.js';
import cors from "cors";

const app = express();

// Middlewares
app.use(express.json())
app.use(cors());

// Routes
app.use('/agency',agencyRoutes);
app.use('/alert',alertRoutes);
app.use('/disaster',disasterRoutes);
app.use('/resource',resourecRoutes);


// Rest Api  
app.get('/',(req,res)=>{
  res.send("<h1>Welecome to Rescue Connect </h1>")
})

export default app;
