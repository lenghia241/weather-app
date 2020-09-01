"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
class Weather {
    route(app) {
        app.get('/api/weather', function (req, res) {
            res.status(200).json({ message: "Get request successfull" });
        });
    }
}
exports.Weather = Weather;
