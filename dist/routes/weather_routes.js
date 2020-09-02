"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Weather = void 0;
const weatherHandler_1 = require("../controllers/weatherHandler");
class Weather {
    constructor() {
        this.weather_controller = new weatherHandler_1.WeatherController();
    }
    route(app) {
        app.get('/api/weather', (req, res) => {
            this.weather_controller.get_weather_ext_api(req, res);
        });
        app.get('/api/multiweather', (req, res) => {
            this.weather_controller.get_multi_weather_ext_api(req, res);
        });
    }
}
exports.Weather = Weather;
