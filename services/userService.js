const User = require('../models/User');

async function createUser(username, hashedPassword) {
    //TODO adapt properties to project requirments
    const user = new User({ username, hashedPassword });
    await user.save();
    return user;
};


async function getUserByUsername(username) {
    const user = await User.findOne({ username: { $regex: username, $options: 'i' } });
    return user;
};

//TODO add function for finding user by other properties , as specified in the project requirments

module.exports = {
    createUser,
    getUserByUsername
}