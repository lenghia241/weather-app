import { Application, Request, Response } from 'express';
import { WeatherController } from '../controllers/weatherHandler';

export class Weather {
	private weather_controller: WeatherController = new WeatherController();

	public route(app: Application) {
		app.get('/api/weather', (req: Request, res: Response) => {
			this.weather_controller.get_weather_ext_api(req, res);
		});
	}
}
