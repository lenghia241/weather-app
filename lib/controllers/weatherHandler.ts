import { Request, Response } from 'express';
import { successResponse, failureResponse } from './responsehandler';

const axios = require('axios');

export class WeatherController {
	public get_weather_ext_api(req: Request, res: Response) {
		const { city, key } = req.query;
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
			)
			.then((response: any) => {
				successResponse('Success', response.data, res);
			})
			.catch((error) => {
				failureResponse(error.message, error, res);
			});
	}

	public get_multi_weather_ext_api(req: Request, res: Response) {
		const { citiesId, key } = req.query;
		axios
			.get(
				`http://api.openweathermap.org/data/2.5/group?id=${citiesId}&units=metric&appid=${key}`
			)
			.then((response: any) => {
				successResponse('Success', response.data, res);
			})
			.catch((error) => {
				failureResponse(error.message, error, res);
			});
	}
}
