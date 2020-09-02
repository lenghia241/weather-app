import React from 'react';
import styled from '@emotion/styled';

const IconStyle = styled.img`
	width: 7.875rem;
	margin: 2rem auto;
`;

const Icon = (props: any) => {
	return (
		<IconStyle
			src={require(`../assets/images/${props.type}.svg`)}
			alt={props.type}
		/>
	);
};

export default Icon;
