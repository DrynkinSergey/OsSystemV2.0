import styled from 'styled-components'

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
