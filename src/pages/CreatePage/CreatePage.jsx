import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { createUserThunk } from '../../redux/operations'
import Form from '../../components/Form/Form'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { selectLoading } from '../../redux/selectors'

export const CreatePage = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const isLoading = useSelector(selectLoading)

	const [currentUser, setCurrentUser] = useState({ name: '', age: '' })
	const handleChange = ({ target: { name, value } }) => {
		setCurrentUser(prevState => ({
			...prevState,
			[name]: value,
		}))
	}
	const handleSubmit = e => {
		e.preventDefault()
		dispatch(createUserThunk(currentUser))
			.unwrap()
			.then(() => navigate('/'))
	}
	return (
		<Form
			formType='add'
			isLoading={isLoading}
			handleSubmit={handleSubmit}
			handleChange={handleChange}
			currentUser={currentUser}
			navigate={navigate}
		/>
	)
}
