import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectLoading, selectUsers } from '../../redux/selectors'
import { useState } from 'react'
import { updateUserThunk } from '../../redux/operations'
import Form from '../../components/Form/Form'

export const EditPage = () => {
	//get id from URL
	const { id } = useParams()
	// get func for redirect user if it needs
	const navigate = useNavigate()
	// get users from redux
	const users = useSelector(selectUsers)
	const isLoading = useSelector(selectLoading)
	// create func for dispatch my actions into redux
	const dispatch = useDispatch()
	// create localstate for my user based on ID
	const [currentUser, setCurrentUser] = useState(() =>
		users.find(user => user.id === id)
	)
	// func for change my user
	const handleChange = ({ target, target: { name, value } }) => {
		if (target.type === 'radio') {
			setCurrentUser(prevState => ({
				...prevState,
				[name]: value,
			}))
		}
		// return old state, for save all unchanged fields and change dynamic field
		setCurrentUser(prevState => ({
			...prevState,
			[name]: value,
		}))
	}
	const handleSubmit = event => {
		event.preventDefault()
		dispatch(updateUserThunk(currentUser))
			.unwrap()
			.then(() => navigate('/'))
	}
	return (
		<Form
			isLoading={isLoading}
			formType='edit'
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			currentUser={currentUser}
			navigate={navigate}
		/>
		// <form onSubmit={handleSubmit}>
		// 	EditPage
		// 	<input
		// 		type='text'
		// 		value={currentUser.name}
		// 		name='name'
		// 		maxLength={30}
		// 		pattern="^[a-zA-Zа-яА-ЯёЁ]+(([',. -][a-zA-Zа-яА-ЯёЁ ])?[a-zA-Zа-яА-ЯёЁ]*)*$"
		// 		required
		// 		onChange={handleChange}
		// 	/>
		// 	<input
		// 		type='number'
		// 		min={1}
		// 		max={120}
		// 		pattern='^(?!0+$)\d+$'
		// 		required
		// 		value={currentUser.age}
		// 		name='age'
		// 		onChange={handleChange}
		// 	/>
		// 	<label>
		// 		<input
		// 			type='radio'
		// 			name='status'
		// 			value='no'
		// 			checked={currentUser.status === 'no'}
		// 			onChange={handleChange}
		// 		/>
		// 		Inactive
		// 	</label>
		// 	<label>
		// 		<input
		// 			type='radio'
		// 			name='status'
		// 			value='yes'
		// 			checked={currentUser.status === 'yes'}
		// 			onChange={handleChange}
		// 		/>
		// 		Active
		// 	</label>
		// 	<button type='submit'>Save</button>
		// 	<button type='button' onClick={() => navigate('/')}>
		// 		Cancel
		// 	</button>
		// </form>
	)
}
