import styled from 'styled-components'
import { Logo } from '../Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Form/Form.styled'

const HeaderSection = styled.header`
	padding: 0px 15px;
	background-color: #2b53f6;
`
const HeaderWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	max-width: 80%;
	margin: 0 auto;
`
const Title = styled.h1`
	color: white;
	font-weight: bold;
`

export const Header = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const title = (() => {
		switch (location.pathname) {
			case '/':
				return 'Dashboard'
			case '/newUser':
				return 'Add User'

			default:
				return 'Edit User'
		}
	})()
	return (
		<HeaderSection>
			<HeaderWrapper>
				<div>
					<Logo />
				</div>
				<Title>{title}</Title>
				{title === 'Dashboard' && (
					<Button onClick={() => navigate('/newUser')}>Add user</Button>
				)}
			</HeaderWrapper>
		</HeaderSection>
	)
}
