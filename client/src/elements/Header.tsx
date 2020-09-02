import styled from '@emotion/styled';

const Header = styled.div`
	color: ${(props: any) => props.theme.colors.white};
	background-color: ${(props: any) => props.theme.colors.secondary};
	font-size: ${(props: any) => props.theme.fontSize.m};
	padding: ${(props: any) => props.theme.spacing.l};
	text-align: center;
	width: 100%;
	height: 4rem;
	box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.16);
`;

export default Header;
