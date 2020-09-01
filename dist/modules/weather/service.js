// import { Weather } from './model';
// import weather from './schema';
// export default class WeatherService {
//     public CreateWeatherSet(weather_params: Weather, callback: any) {
//         const _session = new weather(weather_params);
//         _session.save(callback);
//     }
//     public filterWeatherSet(query: any, callback: any) {
//         weather.findOne(query, callback);
//     }
//     public updateWeatherSet(user_params: Weather, callback: any) {
//         const query = { _id: user_params._id };
//         weather.findOneAndUpdate(query, user_params, callback);
//     }
//     public deleteWeatherSet(_id: String, callback: any) {
//         const query = { _id: _id };
//         weather.deleteOne(query, callback);
//     }
// }
