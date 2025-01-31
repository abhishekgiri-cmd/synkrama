/* eslint-disable no-undef */
const Book = require("../models/book.model");

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) return res.status(404).json({ message: "Book Not Found" });
    res.json(book);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const createBook = async (req, res) => {
  try {
    const { title, author, year, genre } = req.body;
    const newBook = new Book({ title, author, year, genre });
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    res.status(400).json({ message: "Invalid Data" });
  }
};

const updateBook = async (req, res) => {
 const { id } = req.params;
 const { title, author, year, genre } = req.body;
   const payload = { title, author, year, genre };
 try {
   const book = await Book.findOneAndUpdate(
     { _id: id }, // Filter to find book by ID
     payload, // The update payload
     {
       new: true // Return the updated document
     }
   );

   res.json(book); // Return the updated or newly created book
 } catch (error) {
   res.status(400).json({ message: "Invalid Data" });
 }
};

const deleteBook = async (req, res) => {
   const { id } = req.params;
  try {
    const book = await Book.findOneAndDelete({_id:id});
    if (!book) return res.status(404).json({ message: "Book Not Found" });
    res.json({ message: "Book Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { getBooks, getBookById, createBook, updateBook, deleteBook };
