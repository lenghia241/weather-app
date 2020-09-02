import styled from '@emotion/styled';

const Card = styled.div`
	color: ${(props: any) => props.theme.colors.black};
	background-color: ${(props: any) => props.theme.colors.white1};
	font-size: ${(props: any) => props.theme.fontSize.m};
	padding: ${(props: any) => props.theme.spacing.xl};
	text-align: center;
	border-radius: 20px;
	max-width: 35rem;
	max-height: 20rem;
	margin: 2rem auto;
	box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.16);
	transition: transform 0.2s;
	display: flex;
	justify-content: space-between;
`;

export default Card;
