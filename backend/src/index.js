const express = require('express');

const { PORT } = require('./config/server.config.js');

const startServer = () => {

    const app = express();

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();