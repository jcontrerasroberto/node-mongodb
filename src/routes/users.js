const router = require('express').Router();


router.get('/users/signup', (req, res) => {
    res.send('Sign Up');
});

router.get('/users/signin', (req, res) => {
    res.send('Sign In');
});


module.exports = router;