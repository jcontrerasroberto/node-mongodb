const router = require('express').Router();

router.get('/notes', (req, res) => {
    res.send("All the notes");
});


module.exports = router;