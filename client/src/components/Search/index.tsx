/** @jsx jsx */ import { jsx } from '@emotion/core'; // DO NOT REMOVE

import { useState, useContext, FC } from 'react';
import DefaultContext from '../../common/DefaultContext';
import Input from '../../elements/Input';
import Button from '../../elements/Button';
import styled from '@emotion/styled';

interface SearchProps {
	onWeatherSubmit: void;
}

const InputWrapper = styled.div`
	display: flex;
`;

const Label = styled.label`
	text-transform: uppercase;
	font-size: ${(props: any) => props.theme.fontSize.xs};
`;

const Search: FC = () => {
	const [city, setCity] = useState('');
	const { onWeatherSubmit } = useContext(DefaultContext);

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onWeatherSubmit(city);
		setCity('');
	};
	return (
		<form onSubmit={onSubmit}>
			<Label htmlFor='cityInput'>Search for a location</Label>
			<InputWrapper>
				<Input
					id='cityInput'
					type='text'
					value={city}
					onChange={(e): void => setCity(e.target.value)}
				/>
				<Button type='submit'>Submit</Button>
			</InputWrapper>
		</form>
	);
};

export default Search;
