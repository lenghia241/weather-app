import React, { useState, useContext, FC } from 'react';
import DefaultContext from '../../common/DefaultContext';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import styled from 'styled-components';

const InputWrapper = styled.div`
	display: flex;
`;

const Label = styled.label`
	text-transform: uppercase;
	font-size: ${(props) => props.theme.fontSize.xs};
`;

const ErrorMes = styled.div`
	color: ${(props) => props.theme.colors.error};
	margin-top: 2px;
`;

const Search: FC = () => {
	const [city, setCity] = useState('');
	const { getWeather, errorMes } = useContext(DefaultContext);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		city && getWeather(city, false);
		setCity('');
	};

	return (
		<>
			<form onSubmit={onSubmit}>
				<Label htmlFor='cityInput'>Location</Label>
				<InputWrapper>
					<Input
						id='cityInput'
						placeholder='Enter a location (Eg: Espoo)'
						type='text'
						value={city}
						onChange={(e): void => setCity(e.target.value)}
					/>
					<Button type='submit'>Submit</Button>
				</InputWrapper>
			</form>
			{errorMes && <ErrorMes>Can't find location</ErrorMes>}
		</>
	);
};

export default Search;
