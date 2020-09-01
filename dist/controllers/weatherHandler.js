"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeatherController = void 0;
const responsehandler_1 = require("../modules/common/responsehandler");
const axios = require('axios');
class WeatherController {
    get_weather_ext_api(req, res) {
        const { city, key } = req.query;
        axios
            .get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`)
            .then((response) => {
            responsehandler_1.successResponse('Success!', response.data, res);
        })
            .catch((error) => {
            responsehandler_1.failureResponse(error.message, error, res);
        });
    }
}
exports.WeatherController = WeatherController;
