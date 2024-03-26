import express from "express";
import { login, registration } from "../controllers/authController.js";

const authRoutes = express.Router();

// Register User
authRoutes.post("/register", registration);

// Login User
authRoutes.post("/login", login);

export default authRoutes;
