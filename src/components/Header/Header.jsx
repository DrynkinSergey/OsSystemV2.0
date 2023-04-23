import styled from 'styled-components'
import { Logo } from '../Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Form/Form.styled'
import { LG, MAX_WIDTH_LG, MAX_WIDTH_MD } from '../../Const'
import { useMediaQuery } from 'react-responsive'

const HeaderSection = styled.header`
	background-color: #2b53f6;
	padding: 0 10px;
`
const HeaderWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;
	max-width: ${MAX_WIDTH_LG};
	margin: 0 auto;
	overflow: hidden;

	@media (max-width: ${LG}) {
		max-width: ${MAX_WIDTH_MD};
	}
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

	const isMobile = useMediaQuery({
		query: '(max-width: 620px)',
	})
	return (
		<HeaderSection>
			<HeaderWrapper>
				<div>
					<Logo />
				</div>
				{!isMobile && <Title>{title}</Title>}

				{title === 'Dashboard' && (
					<Button onClick={() => navigate('/newUser')}>Add user</Button>
				)}
			</HeaderWrapper>
		</HeaderSection>
	)
}
