const { isUser } = require('../middlewares/guards');

const router = require('express').Router();

router.get('/create', isUser(), async(req, res) => {
    res.render('hotel/create');
});

router.post('/create', isUser(), async(req, res) => {
    const hotelData = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: req.body.rooms,
        bookedBy: [],
        owner: req.user._id
    };

    console.log(hotelData);

    try {
        await req.storage.createHotel(hotelData);
        res.redirect('/')
    } catch (error) {
        let errors;
        if (error.errors) {
            errors = Object.values(error.errors).map(e => e.properties.message);
        } else {
            errors = [error.message];
        }
        const ctx = {
            errors: errors,
            hotelData: {
                name: req.body.name,
                city: req.body.city,
                imageUrl: req.body.imageUrl,
                rooms: req.body.rooms,
            },
        };
        res.render('hotel/create', ctx)
    }
});



module.exports = router;