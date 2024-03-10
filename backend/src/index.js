const express = require('express');

const { PORT } = require('./configs/server.config.js');
const dbConnect = require('./configs/db.config.js');
const router = require('./routes/index.js');

const startServer = () => {

    dbConnect;
    const app = express();

    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();