/** @jsx jsx */ import { jsx } from '@emotion/core'; // DO NOT REMOVE

import React, { useState, Suspense, FC } from 'react';
import axios from 'axios';
import Search from './components/Search';
import { ThemeProvider } from 'emotion-theming';
import theme from './themes/theme';
import DefaultContext from './common/DefaultContext';
import styled from '@emotion/styled';
import Header from './elements/Header';

const WeatherList = React.lazy(() => import('./components/WeatherList'));

const Container = styled.div`
	margin: 0 auto;
	color: ${(props: any) => props.theme.colors.black};
`;

const MainWrapper = styled.div`
	max-width: 500px;
	margin: 5rem auto;
`;

const App: FC = () => {
	const [weatherDetail, setWeatherDetail] = useState({});
	const [error, setError] = useState({});

	React.useEffect(() => {
		const data = localStorage.getItem('city');
		if (data) {
			setWeatherDetail(JSON.parse(data));
		}
	}, []);

	const onWeatherSubmit = async (city: string) => {
		const key = process.env.REACT_APP_API_KEY;

		axios
			.get(`http://localhost:8000/api/weather`, {
				params: { city, key },
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

				setWeatherDetail(weatherData);
				localStorage.setItem('city', JSON.stringify(weatherData));
			})
			.catch((error) => {
				setError('Error when fetching');
			});
	};

	return (
		<ThemeProvider theme={theme}>
			<DefaultContext.Provider
				value={{
					onWeatherSubmit,
					weatherDetail,
					error,
				}}
			>
				<Container>
					<Header>Weather app</Header>
					<MainWrapper>
						<Search />
						<Suspense fallback={<div>Loading....</div>}>
							{weatherDetail && <WeatherList />}
						</Suspense>
					</MainWrapper>
				</Container>
			</DefaultContext.Provider>
		</ThemeProvider>
	);
};

export default App;
