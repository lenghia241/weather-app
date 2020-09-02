import React, { FC } from 'react';
import styled from 'styled-components';
import { IconProps } from '../common/Interface';

const IconStyle = styled.img`
	width: 7.875rem;
	margin: 2rem auto;
`;

const Icon: FC<IconProps> = (props) => (
	<IconStyle
		src={require(`../assets/images/${props.type}.svg`)}
		alt={props.type}
	/>
);

export default Icon;
