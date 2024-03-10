const express = require('express');

const { PORT } = require('./config/server.config.js');
const dbConnect = require('./config/db.config.js');
require('./generateFile.js');
require('./executeCpp.js');

const startServer = () => {

    dbConnect;
    const app = express();

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();