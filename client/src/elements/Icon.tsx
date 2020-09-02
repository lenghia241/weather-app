import React, { FC } from 'react';
import styled from 'styled-components';

const IconStyle = styled.img`
	width: 7.875rem;
	margin: 2rem auto;
`;

interface IconProps {
	type: string;
}

const Icon: FC<IconProps> = (props) => {
	return (
		<IconStyle
			src={require(`../assets/images/${props.type}.svg`)}
			alt={props.type}
		/>
	);
};

export default Icon;
