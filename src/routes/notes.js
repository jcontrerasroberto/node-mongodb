const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.send("All the notes");
});

router.get('/notes/add', (req, res) => {
    res.send("Add a note");
});


module.exports = router;