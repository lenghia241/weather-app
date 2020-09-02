import React, { useState, Suspense, FC } from 'react';
import axios from 'axios';
import Search from './components/Search';
import Empty from './components/Empty';

import { ThemeProvider } from 'styled-components';
import theme from './themes/theme';
import DefaultContext from './common/DefaultContext';
import styled from 'styled-components';
import Header from './elements/Header';

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
	const [weatherDetail, setWeatherDetail] = useState([]);
	const [errorMes, setErrorMes] = useState(false);

	const key = process.env.REACT_APP_API_KEY;

	const getWeather = async (data: string, multi: boolean) => {
		let link: string;
		let params;

		if (multi) {
			link = `http://localhost:8000/api/multiweather`;
			params = { citiesId: data, key };
		} else {
			link = `http://localhost:8000/api/weather`;
			params = { city: data, key };
		}

		await axios
			.get(link, {
				params,
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
				const newWeatherDetail: any = [...weatherDetail, weatherData];
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

	React.useEffect(() => {
		const data = localStorage.getItem('city');
		if (data) {
			const parseData = JSON.parse(data);
			if (parseData.length > 1) {
				const id = parseData.map((item: any) => item?.city?.id)?.join();
				getWeather(id, true);
			} else {
				getWeather(parseData[0].city?.name, false);
			}
			setWeatherDetail(JSON.parse(data));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onWeatherSubmit = async (city: string) => {
		getWeather(city, false);
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
					onWeatherSubmit,
					weatherDetail,
					errorMes,
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
