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

import users from './../../assets/users.json'
import { useNavigate } from 'react-router-dom'

export const Home = () => {
	const [userList, setUserList] = useState(users)
	const [filterField, setFilterField] = useState('name')
	const navigate = useNavigate()
	const handleFieldChange = event => {
		setFilterField(event.target.value)
	}
	const handleEdit = id => {
		navigate(`/editUser/${id}`)
	}

	const handleDelete = id => {
		const updatedList = userList.filter(user => user.id !== id)
		setUserList(updatedList)
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
					{userList.map(user => (
						<Tr key={user.id} active={user.status}>
							<Td>{user.id}</Td>
							<Td>
								<AvatarImg src={user.avatar} alt={user.name} />
							</Td>
							<Td>{user.name}</Td>
							<Td>{user.age}</Td>
							<Td>{user.status}</Td>
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
