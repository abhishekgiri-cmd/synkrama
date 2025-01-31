/* eslint-disable no-undef */
const express = require("express");
const {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} = require("../controller/book.controller");
const authMiddleware = require("../middleware/auth.middleware");

const Bookrouter = express.Router();

Bookrouter.get("/", getBooks);
Bookrouter.get("/:id", getBookById);
Bookrouter.post("/", authMiddleware, createBook);
Bookrouter.put("/:id",authMiddleware, updateBook);
Bookrouter.delete("/:id",authMiddleware, deleteBook);

module.exports = Bookrouter;
