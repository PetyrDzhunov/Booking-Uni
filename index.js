const express = require('express');

const { PORT } = require('./config');
const databaseConfig = require('./config/database');
const expressConfig = require('./config/express');

const authMiddleware = require('./middlewares/auth');
const userService = require('./services/userService');
start()

async function start() {
    const app = express();

    await databaseConfig(app);
    expressConfig(app)

    app.get('/', (req, res) => {
        res.send('It works');
    });

    app.listen(PORT, () => {
        testAuth();
        console.log(`Application started at http://localhost:${PORT}`)
    });
}

async function testAuth() {
    const reqMock = {};
    const resMock = {
        cookie() {
            console.log('Set cookie ', arguments);
        }
    };
    const nextMock = () => {};
    try {
        const auth = authMiddleware();
        auth(reqMock, resMock, nextMock);

        await reqMock.auth.login('john', '123asd');

    } catch (err) {
        console.log('Error:', err.message);
    }
};