import React, { useState, Suspense, FC } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Empty from './components/Empty';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import DefaultContext from './common/DefaultContext';
import styled from 'styled-components';
import Header from './elements/Header';
import { WeatherProps } from './common/Interface';

const WeatherList = React.lazy(() => import('./components/WeatherList'));

const Container = styled.div`
	margin: 0 auto;
	color: ${(props) => props.theme.colors.black};
`;

const MainWrapper = styled.div`
	max-width: 500px;
	margin: 5rem auto;
`;

const App: FC = () => {
	const [weatherDetail, setWeatherDetail] = useState([] as Array<WeatherProps>);
	const [errorMes, setErrorMes] = useState(false);

	const key = process.env.REACT_APP_API_KEY;

	React.useEffect(() => {
		const data = localStorage.getItem('city');
		if (data) {
			const parseData = JSON.parse(data);
			console.log('parseData', parseData, parseData.length > 1);
			if (parseData.length > 1) {
				const id = parseData
					.map((item: WeatherProps) => item?.city?.id)
					?.join();
				getMultiWeather(id);
			} else {
				getWeather(parseData[0].city?.name);
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const getWeather = (data: string) => {
		axios
			.get(`/api/weather`, {
				params: { city: data, key },
			})
			.then((responseJson) => {
				const { id, name, weather, main } = responseJson.data.response;
				const weatherData = {
					city: {
						id,
						name,
					},
					weather,
					temp: main.temp,
				};
				const newWeatherDetail: Array<WeatherProps> = [
					...weatherDetail,
					weatherData,
				];
				setWeatherDetail(newWeatherDetail);
				setErrorMes(false);
				localStorage.setItem(
					'city',
					JSON.stringify([...weatherDetail, weatherData])
				);
			})
			.catch((error) => {
				console.log(error);
				setErrorMes(true);
			});
	};

	const getMultiWeather = (data: string) => {
		axios
			.get(`/api/multiweather`, {
				params: { citiesId: data, key },
			})
			.then((responseJson) => {
				const weatherData = responseJson.data.response.list.map((item: any) => {
					const { id, name, weather, main } = item;
					return {
						city: {
							id,
							name,
						},
						weather,
						temp: main.temp,
					};
				});
				console.log(weatherData);
				const newWeatherDetail: Array<WeatherProps> = [
					...weatherDetail,
					...weatherData,
				];
				setWeatherDetail(newWeatherDetail);
				setErrorMes(false);
				localStorage.setItem(
					'city',
					JSON.stringify([...weatherDetail, ...weatherData])
				);
			})
			.catch((error) => {
				console.log(error);
				setErrorMes(true);
			});
	};

	let cardContent = <Empty />;
	if (weatherDetail?.length) {
		cardContent = (
			<Suspense fallback={<div>Loading....</div>}>
				<WeatherList />
			</Suspense>
		);
	}

	return (
		<ThemeProvider theme={theme}>
			<DefaultContext.Provider
				value={{
					weatherDetail,
					errorMes,
					setWeatherDetail,
					getWeather,
				}}
			>
				<Container>
					<Header>Weather app</Header>
					<MainWrapper>
						<Search />
						{cardContent}
					</MainWrapper>
				</Container>
			</DefaultContext.Provider>
		</ThemeProvider>
	);
};

export default App;
