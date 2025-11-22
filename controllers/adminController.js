import Contact from "../models/contact.js";

export const getContacts = async (req, res) => {
  try {
    // fetch all contacts sorted by newest first
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
