// import { Request, Response } from 'express';
// import { insufficientParameters, mongoError, successResponse, failureResponse } from '../modules/common/responsehandler';
// import { IUser } from '../modules/users/model';
// import UserService from '../modules/users/service';
// import { apiKey } from '../modules/common/key';
// import e = require('express');
// // const request = require('request');
// export class UserController {
//     private user_service: UserService = new UserService();
//     public create_user(req: Request, res: Response) {
//         const {currentCity} = req.query;
//         // let weatherData = [
//         //     {
//         //         city: 'helsinki',
//         //         feels_like: 0,
//         //         temp_min: 0,
//         //         temp_max: 0,
//         //         pressure: 0,
//         //         humidity: 0
//         //     }
//         // ];
//         // request(`http://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}`,  (error, response, body) => {
//         // if(error) {
//         //   failureResponse('FETCH FAIL', null, res);
//         // }
//         // else {
//         //   console.log("bodyyyy ", JSON.parse(body) );
//                   // this check whether all the filds were send through the erquest or not
//         if (req.body.name &&
//             req.body.email &&
//             req.body.phone_number &&
//             req.body.gender
//             ) {
//             const user_params: IUser = {
//                 name: req.body.name,
//                 email: req.body.email,
//                 phone_number: req.body.phone_number,
//                 gender: req.body.gender,
//                 cities: ["d", "Helsinki"],
//             };
//             console.log("user_data ", user_params)
//             this.user_service.createUser(user_params, (err: any, user_data: IUser) => {
//                 if (err) {
//                     mongoError(err, res);
//                 } else {
//                     successResponse('create user successfull', user_data, res);
//                 }
//             });
//         } else {
//             // error response if some fields are missing in request body
//             insufficientParameters(res);
//         }
//         // }
//     //   });
//     }
//     public get_user(req: Request, res: Response) {
//         if (req.params.id) {
//             const user_filter = { _id: req.params.id };
//             this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
//                 if (err) {
//                     mongoError(err, res);
//                 } else {
//                     successResponse('get user successfull', user_data, res);
//                 }
//             });
//         } else {
//             insufficientParameters(res);
//         }
//     }
//     public update_user(req: Request, res: Response) {
//         if (req.params.id &&
//             req.body.name ||
//             req.body.email ||
//             req.body.phone_number ||
//             req.body.gender ||
//             req.body.citie ||
//             req.body.weaterData ) {
//             const user_filter = { _id: req.params.id };
//             this.user_service.filterUser(user_filter, (err: any, user_data: IUser) => {
//                 if (err) {
//                     mongoError(err, res);
//                 } else if (user_data) {
//                     const user_params: IUser = {
//                         _id: req.params.id,
//                         name: req.body.name || user_data.name,
//                         email: req.body.email || user_data.email,
//                         phone_number: req.body.phone_number || user_data.phone_number,
//                         gender: req.body.gender || user_data.gender,
//                         cities: req.body.cities || user_data.cities,
//                         weatherDate: req.body.weaterData || user_data.weatherDate,
//                     };
//                     this.user_service.updateUser(user_params, (err: any) => {
//                         if (err) {
//                             mongoError(err, res);
//                         } else {
//                             successResponse('update user successfull', null, res);
//                         }
//                     });
//                 } else {
//                     failureResponse('invalid user', null, res);
//                 }
//             });
//         } else {
//             insufficientParameters(res);
//         }
//     }
//     public delete_user(req: Request, res: Response) {
//         if (req.params.id) {
//             this.user_service.deleteUser(req.params.id, (err: any, delete_details) => {
//                 if (err) {
//                     mongoError(err, res);
//                 } else if (delete_details.deletedCount !== 0) {
//                     successResponse('delete user successfull', null, res);
//                 } else {
//                     failureResponse('invalid user', null, res);
//                 }
//             });
//         } else {
//             insufficientParameters(res);
//         }
//     }
// }
