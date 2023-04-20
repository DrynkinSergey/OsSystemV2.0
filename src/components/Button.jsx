import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledButton = styled.button`
	padding: 8px 12px;
	border-radius: 8px;
	background-color: white;
	cursor: pointer;
	font-size: 1.4rem;
	border: none;
	transition: all 0.3s ease;
	box-shadow: 2px 2px 10px 1px black;

	&:hover {
		background-color: green;
		color: white;
	}
`
export const Button = props => {
	const navigate = useNavigate()
	return <StyledButton {...props} onClick={() => navigate('/newUser')} />
}
