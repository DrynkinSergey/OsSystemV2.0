import styled from 'styled-components'
import { Logo } from '../Logo'
import { Button } from '../Button'
import { useLocation } from 'react-router-dom'

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
	const title = (() => {
		switch (location.pathname) {
			case '/':
				return 'Dashboard'
			case '/newUser':
				return 'Add User'
			case '/editUser':
				return 'Edit User'

			default:
				return
		}
	})()
	return (
		<HeaderSection>
			<HeaderWrapper>
				<div>
					<Logo />
				</div>
				<Title>{title}</Title>
				<Button>Add user</Button>
			</HeaderWrapper>
		</HeaderSection>
	)
}
