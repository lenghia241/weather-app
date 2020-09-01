"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
const apiKey = '960a3201a350df128232bf4d9b60dd60';
const city = 'portland';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
exports.data = {
    apiKey,
    city,
    url
};
