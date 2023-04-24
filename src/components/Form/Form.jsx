import PropTypes from 'prop-types'
import {
	AvatarWrapper,
	Button,
	Input,
	Label,
	LabelRadio,
	RadioLabels,
	StyledForm,
	StyledFormWrapper,
} from './Form.styled'
import Avatar from '../Avatar'
import { useEffect, useRef } from 'react'

const Form = ({
	currentUser,
	handleSubmit,
	handleChange,
	navigate,
	formType,
	isLoading,
}) => {
	const inputRef = useRef()
	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const showRadioBtns = formType === 'edit' && (
		<RadioLabels>
			<LabelRadio>
				<input
					type='radio'
					name='status'
					value='no'
					checked={currentUser.status === 'no'}
					onChange={handleChange}
				/>
				Inactive
			</LabelRadio>
			<LabelRadio>
				<input
					type='radio'
					name='status'
					value='yes'
					checked={currentUser.status === 'yes'}
					onChange={handleChange}
				/>
				Active
			</LabelRadio>
		</RadioLabels>
	)
	const showAvatar = formType === 'edit' && (
		<AvatarWrapper>
			<Avatar svg={currentUser.avatar} />
		</AvatarWrapper>
	)

	return (
		<StyledFormWrapper>
			{showAvatar}
			<StyledForm onSubmit={handleSubmit}>
				<Label>
					<span>Name*</span>
					<Input
						ref={inputRef}
						tabindex='1'
						type='text'
						value={currentUser.name}
						name='name'
						autoComplete='off'
						maxLength={30}
						pattern="^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$"
						required
						onChange={handleChange}
					/>
				</Label>

				<Label>
					<span>Age*</span>
					<Input
						tabindex='2'
						type='number'
						min={1}
						autoComplete='off'
						max={120}
						pattern='^(?!0+$)\d+$'
						required
						value={currentUser.age}
						name='age'
						onChange={handleChange}
					/>
				</Label>

				{showRadioBtns}

				<Button tabindex='3' disabled={isLoading} type='submit'>
					Save
				</Button>

				<Button tabindex='4' type='button' onClick={() => navigate('/')}>
					Cancel
				</Button>
			</StyledForm>
		</StyledFormWrapper>
	)
}

Form.propTypes = {
	currentUser: PropTypes.object.isRequired,
	handleSubmit: PropTypes.func.isRequired,
	handleChange: PropTypes.func.isRequired,
	navigate: PropTypes.func.isRequired,
	formType: PropTypes.string.isRequired,
	isLoading: PropTypes.bool.isRequired,
}

export default Form
