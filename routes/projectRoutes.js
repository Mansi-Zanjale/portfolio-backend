import express from "express";
import { getProjects } from "../controllers/projectController.js";

const router = express.Router();

// GET all projects
router.get("/projects", getProjects);

export default router;
