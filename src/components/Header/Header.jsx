import { Logo } from '../Logo'
import { useLocation, useNavigate } from 'react-router-dom'
import { Button } from '../Form/Form.styled'
import { useMediaQuery } from 'react-responsive'
import { useMemo } from 'react'
import { HeaderSection, HeaderWrapper, Title } from './Header.styled'

export const Header = () => {
	const location = useLocation()
	const navigate = useNavigate()

	const title = useMemo(() => {
		switch (location.pathname) {
			case '/':
				return 'Dashboard'
			case '/newUser':
				return 'Add User'

			default:
				return 'Edit User'
		}
	}, [location.pathname])

	const isMobile = useMediaQuery({
		query: '(max-width: 620px)',
	})

	return (
		<HeaderSection>
			<HeaderWrapper>
				<Logo />
				{/* Check when size is mobile and location is not 'Dashboard' =>> render title */}
				{isMobile && title !== 'Dashboard' && <Title>{title}</Title>}
				{!isMobile && <Title>{title}</Title>}
				{title === 'Dashboard' && (
					<Button onClick={() => navigate('/newUser')}>Add user</Button>
				)}
			</HeaderWrapper>
		</HeaderSection>
	)
}
