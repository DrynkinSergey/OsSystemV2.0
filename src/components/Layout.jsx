import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import styled from 'styled-components'
const Wrapper = styled.div`
	max-width: 80%;
	margin: 0 auto;
`
export const Layout = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<Outlet fallback={null} />
			</Wrapper>
		</>
	)
}
