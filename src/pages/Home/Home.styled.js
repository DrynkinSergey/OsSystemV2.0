import styled from 'styled-components'

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
	max-width: 50%;
	margin: 0 auto;

	@media (max-width: 768px) {
		max-width: 100%;
	}
`

export const Th = styled.th`
	background-color: #2b53f6;
	color: white;
	text-align: left;
	padding: 8px;
	border: 1px solid #ddd;
	white-space: nowrap;
`
export const ThAvatar = styled(Th)`
	text-align: center;
	width: 64px;
`
export const ThActions = styled(Th)`
	text-align: center;
	width: 120px;
`
export const ThIndex = styled(Th)`
	text-align: center;
	width: 20px;
`

export const Td = styled.td`
	text-align: left;
	padding: 8px;
	border: 1px solid #ddd;
	white-space: nowrap;
`

export const AvatarImg = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	object-fit: cover;
`
export const Tr = styled.tr`
	background-color: ${({ active }) =>
		active === 'Active' ? '#c6e6ff' : 'white'};
`

export const ActionButton = styled.button`
	background-color: ${({ danger }) => (danger ? 'red' : 'green')};
	color: white;
	padding: 8px 16px;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-right: 8px;

	&:last-child {
		margin-right: 0;
	}
`
