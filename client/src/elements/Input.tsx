import styled from '@emotion/styled';

const Input = styled.input`
	margin-top: 0.5rem;
	padding: 0;
	width: 33rem;
	height: auto;
	line-height: normal;
	font-size: ${(props: any) => props.theme.fontSize.l};
	color: ${(props: any) => props.theme.colors.black};
	border: none;
	border-bottom: 2px solid #d6d6d6;
	:focus {
		outline: none;
	}
`;

export default Input;
