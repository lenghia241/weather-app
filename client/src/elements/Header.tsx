import styled from 'styled-components';

const Header = styled.div`
	color: ${(props) => props.theme.colors.white};
	background-color: ${(props) => props.theme.colors.secondary};
	font-size: ${(props) => props.theme.fontSize.m};
	padding: ${(props) => props.theme.spacing.l};
	text-align: center;
	width: 100%;
	height: 4rem;
	box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.16);
`;

export default Header;
