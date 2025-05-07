import express from "express";
import http from "http";
import authRoutes from "./routes/authRoute.js";
import activityRoutes from "./routes/activityRoute.js";
import bookingRoutes from "./routes/bookingRoute.js";
import { config } from "dotenv";
import expressConfig from "./middlewares/expressMiddleware.js";
import mongoDBConnect from "./config/dbConnection.js";
import serverConnection from "./config/serverConnection.js";
config();

const app = express();
const server = http.createServer(app);

// Middleware configuration
expressConfig(app);

// Routes Configurations
app.use("/api/auth", authRoutes);
app.use("/api/activities", activityRoutes);
app.use("/api/bookings", bookingRoutes);

// Connecting the Atlas database
mongoDBConnect();

// Starting the server
serverConnection(server);
