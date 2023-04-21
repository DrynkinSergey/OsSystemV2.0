import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { fetchStatus } from '../../redux/operations'

export const CreatePage = () => {
	const dispatch = useDispatch()
	const handleAddUser = () => {
		dispatch(
			fetchStatus({
				id: nanoid(),
				name: 'Petr',
				age: 30,
			})
		)
	}
	return (
		<div>
			<button onClick={handleAddUser}>add user</button>
		</div>
	)
}
