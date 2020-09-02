# weather-app

### [Live demo](https://fathomless-savannah-87472.herokuapp.com/)


## Back end
Build with nodejs, express, Typescript and OpenWeatherApi

To start:

`npm install`

`npm run dev`

If you see tsc error, run this command to install typescript globally:
`npm npm install typescript -g`

### APi end point

- Get weather data for a city
GET: `api/weather`: take `city` and `key`as params

- Get weather data for multiple cities
GET: `api/multiweather`: take `citiesId` and `key`as params 

<br/>

## Front end
Build with React, Typescript, styled-component, Deploy with Heroku

To start:

`npm install`

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view in browser

### Usage:
- Add a location using input and submit
- Delete added location
- Data is persist in local storage so you won't lose the locations you added next time you visit





