import dotenv from 'dotenv';
dotenv.config();
import express from "express";
const app = express();
import mongoose from "mongoose";
import { Contact } from './ContactSchema.js';
import cors from 'cors';

mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Database Connected');})
.catch((err) => {console.error(err)});

app.use(
    cors({
        origin: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json());

app.post("/", async (req, res) => {
  let body = req.body;
  console.log(body);
  await Contact.find({ gmail: body.gmail }).then(async (result) => {
    console.log(result);
    if (result.length > 0) {
      res.send({ msg: "contact already exist" });
    } else {
      await Contact.create(body);
      res.send({ msg: "contact added successfully", data: body });
    }
  });
});

app.get("/", async (req, res) => {
  try {
    let contact = await Contact.find().sort({ createdAt: -1 });
    res.send({ msg: "success", contact });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

app.put("/:id", async (req, res) => {
  let id = req.params.id;
  console.log(id);
  let updateContact = req.body;
  console.log(updateContact);
  try {
    let contact = await Contact.findById(id);
    if (!contact) return res.send({ msg: "Contact not found" });
    await Contact.findByIdAndUpdate(id, updateContact, { new: true });
    res.send({ msg: "Contact updated" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

app.delete("/:id", async (req, res) => {
  let id = req.params.id;
  try {
    let contact = await Contact.findById(id);
    if (!contact) return res.send({ msg: "Contact not found" });
    await Contact.findByIdAndDelete(id);
    res.send({ msg: "Contact deleted successfully!" });
  } catch (error) {
    res.send({ msg: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});