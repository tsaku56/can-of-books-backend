const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.DATABASE_URL);

const Book = require("./models/books");

async function seed() {
  await Book.create({ title: "Crying for Dummies", description: "How to open up emotionally", status: false });
  await Book.create({ title: "Hare and Back Again", description: "A Rabbit adventure", status: true });
  await Book.create({ title: "Dude, Where's my Code?", description: "A tale of loss and recovery", status: false });
  console.log("Created books");
  mongoose.disconnect();
}

seed();
