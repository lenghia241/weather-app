import React, { useContext, FC } from 'react';
import dateformat from 'dateformat';
import DefaultContext from '../../common/DefaultContext';
import Card from '../../elements/Card';
import Icon from '../../elements/Icon';
import styled from '@emotion/styled';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`;

const WeatherList: FC = () => {
	const { weatherDetail } = useContext(DefaultContext);
	const { city, temp, weather } = weatherDetail;
	const date = new Date();
	return (
		<Card>
			{weather && <Icon type={weather && weather[0]?.main} />}
			<ContentWrapper>
				<h3>{city?.name}</h3>
				<p>{temp} °</p>
				<div>{weather && weather[0]?.main}</div>
				<h4>{dateformat(date, 'dddd, mmmm dd')}</h4>
			</ContentWrapper>
		</Card>
	);
};

export default WeatherList;
