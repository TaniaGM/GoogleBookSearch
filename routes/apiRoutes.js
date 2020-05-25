const router = require('express').Router();
const books = require('google-books-search');

router.get("/search", (req, res) => {
    books.search(req.query.query, function (err, results) {
        if (!err) {
            console.log(results.length);
            let data = results;
            res.json(data);
        } else {
            console.log(err);
        };
    });
});

module.exports = router;