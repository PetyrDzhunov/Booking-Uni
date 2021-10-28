const router = require('express').Router();

router.get('/create', async(req, res) => {
    res.render('hotel/create');
});


module.exports = router;