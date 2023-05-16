const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/books");

async function seed() {
  await Book.create({ title: "Crying for Dummies", description: "How to guide on opening up emotionally", status: "Read" });
  await Book.create({ title: "Hare and Back Again", description: "A Rabbit's Tail", status: "Not Read" });
  await Book.create({ title: "Dude, Where's my Code?", description: "A journey of loss and recovery", status: "Read" });
  console.log("Created books");
  mongoose.disconnect();
}

seed();
