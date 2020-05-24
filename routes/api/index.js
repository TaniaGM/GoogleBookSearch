const router = require("express").Router();
const bookRoutes = require("./books");

// creating all possible api/ routes to be exported in this index file
router.use("/books", bookRoutes)

module.exports = router;

// localhost:3001/api/books