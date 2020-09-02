import * as express from 'express';
import * as bodyParser from 'body-parser';
import { CommonRoutes } from '../routes/common_routes';
import { Weather } from '../routes/weather_routes';
class App {
	public app: express.Application;

	private common_routes: CommonRoutes = new CommonRoutes();
	private weather_routes: Weather = new Weather();
	constructor() {
		this.app = express();
		const cors = require('cors');
		this.app.use(cors({ origin: true, credentials: true }));
		this.config();
		this.weather_routes.route(this.app);

		const path = require('path');
		//Server static assets if in production

		this.app.use(express.static('client/build'));
		this.app.get(
			'*',
			(request: express.Request, response: express.Response) => {
				response.sendFile(
					path.resolve(__dirname, 'client', 'build', 'index.html')
				);
			}
		);

		this.common_routes.route(this.app);
	}

	private config(): void {
		// support application/json type post data
		this.app.use(bodyParser.json());
		//support application/x-www-form-urlencoded post data
		this.app.use(bodyParser.urlencoded({ extended: false }));
		require('dotenv').config();
	}
}
export default new App().app;
