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
GET: `api/weather`: take `city` and `key`as params

GET: `api/multiweather`: take `citiesId` and `key`as params 

<br/>

## Front end
Build with React, Typescript, styled-component, 
To start:

`npm install`

`npm start`

Open [http://localhost:3000](http://localhost:3000) to view in browser

### Usage:
- Add a location using input and submit
- Data is persist in local storage so you won't lose the locations you added
- To delete locations: Go to devtools => Application => localStorage => clear storage //Todo: Develop delete feature for each location and all locations





