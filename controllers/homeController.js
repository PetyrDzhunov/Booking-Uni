const router = require('express').Router();


router.get('/', async(req, res) => {
    const hotels = await req.storage.getAllHotels();
    console.log(hotels);
    res.render('home/home', { hotels });
});


module.exports = router;