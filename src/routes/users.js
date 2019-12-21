const router = require('express').Router();


router.get('/users/signup', (req, res) => {
    res.render('users/signup');
});

router.get('/users/signin', (req, res) => {
    res.render('users/signin');
});


module.exports = router;