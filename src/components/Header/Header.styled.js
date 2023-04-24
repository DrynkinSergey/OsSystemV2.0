import styled from 'styled-components'
import { LG, MAX_WIDTH_LG, MAX_WIDTH_MD } from '../../Const'

export const HeaderSection = styled.header`
	background-color: #2b53f6;
	padding: 0 10px;
`
export const HeaderWrapper = styled.div`
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
export const Title = styled.h1`
	color: white;
	font-weight: bold;
`
