import styled from 'styled-components'

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
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
	background-color: ${({ danger }) => (danger ? 'red' : '#2b53f6')};
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
export const FilterSelect = styled.select`
	margin: 20px 0;

	background-color: #ffffff;
	border: 1px solid #d9d9d9;
	border-radius: 4px;
	color: #4a4a4a;
	font-size: 16px;
	height: 32px;
	padding: 4px 8px;

	&:focus {
		outline: none;
		border-color: #1890ff;
		box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.4);
	}
`
export const FilterOption = styled.option`
	background-color: #ffffff;
	color: #4a4a4a;
`
