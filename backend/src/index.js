const express = require('express');
const cors = require('cors');

const { PORT } = require('./configs/server.config.js');
const dbConnect = require('./configs/db.config.js');
const router = require('./routes/index.js');

const startServer = () => {

    dbConnect;
    const app = express();

    app.options('*', (req, res) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Credentials', true);
        // Respond to the preflight request
        res.status(200).send();
    });
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();
