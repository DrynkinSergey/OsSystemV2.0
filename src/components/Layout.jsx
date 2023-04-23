import { Outlet } from 'react-router-dom'
import { Header } from './Header/Header'
import styled from 'styled-components'
import { LG, MAX_WIDTH_LG, MAX_WIDTH_MD } from '../Const'
const Wrapper = styled.div`
	max-width: ${MAX_WIDTH_LG};
	margin: 0 auto;
	padding: 0 10px;
	overflow: hidden;
	@media (max-width: ${LG}) {
		max-width: ${MAX_WIDTH_MD};
	}
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
