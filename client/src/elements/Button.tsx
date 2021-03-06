import styled from 'styled-components';

const Button = styled.button`
	width: 107px;
	background: ${(props) => props.theme.colors.primary};
	color: ${(props) => props.theme.colors.white};
	text-transform: uppercase;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	cursor: pointer;
	height: 45px;
	padding: 0 1rem;
	border-radius: 10px 10px 0 0;
	border: none;
	:hover {
		opacity: 0.7;
	}
	:focus {
		outline: none;
	}
`;

export default Button;
