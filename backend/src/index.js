const express = require('express');
const cors = require('cors');

const { PORT } = require('./configs/server.config.js');
const dbConnect = require('./configs/db.config.js');
const router = require('./routes/index.js');

const startServer = () => {

    dbConnect;
    const app = express();

    app.use((req, res, next) => {
        res.setHeader(
          "Access-Control-Allow-Origin",
          "https://sahanilxm-online-cpp-compiler.vercel.app/"
        );
        res.setHeader(
          "Access-Control-Allow-Methods",
          "GET, HEAD, PUT, PATCH, POST, DELETE, OPTIONS, CONNECT, TRACE"
        );
        res.setHeader(
          "Access-Control-Allow-Headers",
          "Content-Type, Authorization, X-Content-Type-Options, Accept, X-Requested-With, Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
        );
        res.setHeader("Access-Control-Allow-Credentials", true);
        res.setHeader("Access-Control-Allow-Private-Network", true);
        res.setHeader("Access-Control-Max-Age", 7200);
        next();
    });

    // Set preflight
    app.options("*", (req, res) => {
        console.log("preflight");
        if(req.headers.origin === "https://badmintown.onrender.com" && allowMethods.includes(req.headers["access-control-request-method"]) && allowHeaders.includes(req.headers["access-control-request-headers"])){
            console.log("pass");
            return res.status(204).send();
        }
        else{
            console.log("fail");
        }
    });
    app.use(express.json());
    app.use(express.urlencoded({extended : true}));
    app.use(router);

    app.listen(PORT, () => {
        console.log(`Server runing at Port number: `, PORT);
    });

};

startServer();
