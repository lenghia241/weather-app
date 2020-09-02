"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const common_routes_1 = require("../routes/common_routes");
const weather_routes_1 = require("../routes/weather_routes");
class App {
    constructor() {
        this.common_routes = new common_routes_1.CommonRoutes();
        this.weather_routes = new weather_routes_1.Weather();
        this.app = express();
        const cors = require('cors');
        this.app.use(cors({ origin: true, credentials: true }));
        this.config();
        this.weather_routes.route(this.app);
        this.common_routes.route(this.app);
        //Server static assets if in production
        if (process.env.NODE_ENV === 'production') {
            app.use(express.static('client/build'));
            app.get('*', (req, res) => {
                res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
            });
        }
    }
    config() {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().app;
