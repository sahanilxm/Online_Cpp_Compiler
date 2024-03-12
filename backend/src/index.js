const express = require('express');
const cors = require('cors');

const { PORT } = require('./configs/server.config.js');
const dbConnect = require('./configs/db.config.js');
const router = require('./routes/index.js');

const startServer = () => {

    dbConnect;
    const app = express();

    app.use(cors({
        origin: [
            "http://localhost:3000/",
            "https://sahanilxm-online-cpp-compiler.vercel.app/"
        ],
        methods: ["GET", "POST", "OPTIONS"],
        allowedHeaders: ["Content-Type", "Authorization"],
        exposedHeaders: ["Content-Length", "X-Foo", "X-Bar"],
    }));
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();
