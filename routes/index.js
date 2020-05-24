const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// setting up the root of the api route url
router.use("/api", apiRoutes);

// if no such request is found, return the index html page
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
});

module.exports = router;

// localhost:3001/api