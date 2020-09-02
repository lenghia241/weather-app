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

	const onWeatherSubmit = async (city: string) => {
		axios
			.get(`http://localhost:8000/api/weather`, {
				params: { city, key: 'cb348323e75deb325f67a764534c84ab' },
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
				console.log(weatherData);
				setWeatherDetail(weatherData);
			})
			.catch((error) => {
				setError('Error when fetching');
			});
	};
	console.log(theme);
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
