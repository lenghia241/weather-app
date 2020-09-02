import React, { useContext, FC } from 'react';
import dateformat from 'dateformat';
import DefaultContext from '../../common/DefaultContext';
import Card from '../../elements/Card';
import Icon from '../../elements/Icon';
import styled from 'styled-components';
import { WeatherContent } from '../../common/Interface';

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: relative;
`;

const DeleteIcon = styled.img`
	width: ${(props) => props.theme.fontSize.m};
	position: absolute;
	right: 0;
	top: 0;
	cursor: pointer;
`;

const WeatherList: FC = () => {
	const { weatherDetail, onDeleteLocation } = useContext(DefaultContext);

	const date = new Date();

	const renderWeather = weatherDetail.map(
		(item: WeatherContent, index: number) => {
			const { city, temp, weather } = item;

			return (
				<Card key={index}>
					{weather && <Icon type={weather && weather[0]?.main} />}
					<ContentWrapper>
						<DeleteIcon
							src={require(`../../assets/images/Delete.svg`)}
							alt={'delete'}
							onClick={() => onDeleteLocation(city?.id)}
						/>
						<h3>{city?.name}</h3>
						<p>{temp} °</p>
						<div>{weather && weather[0]?.main}</div>
						<h4>{dateformat(date, 'dddd, mmmm dd')}</h4>
					</ContentWrapper>
				</Card>
			);
		}
	);

	return <>{renderWeather}</>;
};

export default WeatherList;
