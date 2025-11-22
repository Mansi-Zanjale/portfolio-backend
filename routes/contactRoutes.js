import express from "express";
import {
  submitContactForm,
  getContacts,
} from "../controllers/contactController.js";

const router = express.Router();

// Existing POST route
router.post("/contact", submitContactForm);

// ✅ Add this GET route
router.get("/contacts", getContacts);

export default router;
