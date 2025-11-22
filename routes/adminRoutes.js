import express from "express";
import { getContacts } from "../controllers/adminController.js";

const router = express.Router();

// GET /api/admin/contacts
router.get("/contacts", getContacts);

export default router;
