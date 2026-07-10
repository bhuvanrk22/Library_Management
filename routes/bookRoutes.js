const { validateBook } = require("../middleware/validation");
const authenticateUser = require("../middleware/authmiddleware")

const express = require ("express");
 

const router = express.Router();

const{
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook, 
} = require("../controllers/bookController");

router.get("/",getAllBooks);

router.get("/:id", getBookById);

router.post("/",authenticateUser, validateBook, addBook);

router.put("/:id", authenticateUser, validateBook, updateBook);

router.delete("/id",authenticateUser, deleteBook);
 
module.exports = router;
