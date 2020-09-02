import React, { useContext, FC } from 'react';
import dateformat from 'dateformat';
import DefaultContext from '../../common/DefaultContext';
import Card from '../../elements/Card';
import Icon from '../../elements/Icon';
import styled from 'styled-components';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

interface WeatherContent {
	city: {
		id: number;
		name: string;
	};
	weather: any[];
	temp: number;
}

const WeatherList: FC = () => {
	const { weatherDetail } = useContext(DefaultContext);

	const date = new Date();

	const renderWeather = weatherDetail.map((item: WeatherContent) => {
		const { city, temp, weather } = item;

		return (
			<Card key={city?.id}>
				{weather && <Icon type={weather && weather[0]?.main} />}
				<ContentWrapper>
					<h3>{city?.name}</h3>
					<p>{temp} °</p>
					<div>{weather && weather[0]?.main}</div>
					<h4>{dateformat(date, 'dddd, mmmm dd')}</h4>
				</ContentWrapper>
			</Card>
		);
	});

	return <>{renderWeather}</>;
};

export default WeatherList;
