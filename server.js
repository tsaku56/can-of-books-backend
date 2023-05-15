const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const PORT = process.env.PORT || 8080;
const app = express();
app.use(cors());

const Book = require("./models/books");

mongoose.connect(process.env.DATABASE_URL);

app.get("/", (request, response) => {
  response.json("You are on the root route of my book app.");
});

app.get("/books", async (request, response) => {
  console.log(request.query);
  const books = await Book.find({});
  response.json(books);
});

app.listen(PORT, () => console.log(`App is listening for port ${PORT}`));