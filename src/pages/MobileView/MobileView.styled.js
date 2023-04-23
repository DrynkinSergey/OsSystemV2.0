import styled from 'styled-components'

export const Span = styled.span``
export const AvatarSpan = styled(Span)`
	width: 15%;
`

export const Ul = styled.ul`
	width: 100%;
	padding: 20px 0;
`

export const Li = styled.li`
	height: 48px;
	background-color: #ffffff;
	padding-left: 20px;
	padding-right: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-left: 5px solid
		${props => (props.status === 'yes' ? '#007bff' : 'tomato')};
	border-bottom: 1px solid #dcdcdf;
	font-size: 1rem;
`

export const TitleSpan = styled.span`
	font-style: normal;
	font-weight: 700;
	font-size: 18px;
	line-height: 27px;
`
