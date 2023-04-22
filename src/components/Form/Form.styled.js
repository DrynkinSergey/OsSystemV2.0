import styled from 'styled-components'
export const Label = styled.label`
	margin: 5px 0;
	color: #9da4ab;
	font-size: 16px;
	display: flex;
	flex-direction: column;
	gap: 10px;
`
export const AvatarWrapper = styled.div`
	width: 150px;
	background-color: hsla(0, 0%, 100%, 0.8);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	border-radius: 20px;
	padding: 0 20px;
	margin: 10px 0;
`
export const RadioLabels = styled.div`
	display: flex;
	justify-content: center;
	padding: 20px 0;
	gap: 40px;
`
export const LabelRadio = styled.label`
	margin: 5px 0;
	color: #9da4ab;
	font-size: 16px;
	display: flex;
	gap: 10px;
`
export const StyledForm = styled.form`
	border-radius: 20px;
	max-height: 700px;
	overflow: hidden;
	display: flex;
	gap: 20px;
	flex-direction: column;
	background-color: hsla(0, 0%, 100%, 0.8);
	box-shadow: 0 6px 20px rgba(0, 0, 0, 0.2);
	width: 100%;
	max-width: 600px;
	padding: 40px;
	margin: 0 auto;
`
export const StyledFormWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	min-height: 80vh;
`

export const Input = styled.input`
	border: none;
	background-color: transparent;
	margin-bottom: 11px;
	min-height: 24px;
	height: auto;
	border-bottom: 1px solid #a0a0a0;
	outline: none;
	font-size: 20px;
	padding-left: 10px;
`

export const Button = styled.button`
	font-size: 1.23rem;
	color: #fff;
	background-color: #3870de;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.1);
	border-radius: 8px;
	text-align: center;
	border: none;
	outline: none;
	cursor: pointer;
	min-width: 248px;
	max-height: 56px;
	padding: 16px 80px;
	min-height: 41px;
	text-transform: uppercase;
	&:hover {
		background-color: #007bff;
	}
	&:focus {
		background-color: #007bff;
	}
`
