import { useState } from 'react'
import {
	ActionButton,
	AvatarImg,
	FilterOption,
	FilterSelect,
	Table,
	Td,
	Th,
	ThActions,
	ThAvatar,
	ThIndex,
	Tr,
} from './Home.styled'

import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectUsers } from '../../redux/selectors'
import { removeUser } from '../../redux/userSlice'
import Avatar from '../../components/Avatar'

export const Home = () => {
	const users = useSelector(selectUsers)
	const dispatch = useDispatch()
	const [filterField, setFilterField] = useState('name')
	const navigate = useNavigate()
	const handleFieldChange = event => {
		setFilterField(event.target.value)
	}
	const handleEdit = id => {
		navigate(`/editUser/${id}`)
	}

	const handleDelete = id => {
		dispatch(removeUser(id))
	}

	return (
		<>
			<FilterSelect value={filterField} onChange={handleFieldChange}>
				<FilterOption value='name'>Name</FilterOption>
				<FilterOption value='age'>Age</FilterOption>
			</FilterSelect>
			<Table>
				<thead>
					<tr>
						<ThIndex>#</ThIndex>
						<ThAvatar>Avatar</ThAvatar>
						<Th>Name</Th>
						<Th>Age</Th>
						<Th>Status</Th>
						<ThActions>Actions</ThActions>
					</tr>
				</thead>
				<tbody>
					{users.map((user, index) => (
						<Tr key={user.id} active={user.status}>
							<Td>{index + 1}</Td>
							<Td>
								{/* <AvatarImg src={user.avatar} alt={user.name} /> */}
								<Avatar svg={user.avatar} />
							</Td>
							<Td>{user.name}</Td>
							<Td>{user.age}</Td>
							<Td>{user.status === 'yes' ? 'Active' : '-'}</Td>
							<Td>
								<ActionButton onClick={() => handleEdit(user.id)}>
									Edit
								</ActionButton>
								<ActionButton danger onClick={() => handleDelete(user.id)}>
									Delete
								</ActionButton>
							</Td>
						</Tr>
					))}
				</tbody>
			</Table>
		</>
	)
}
