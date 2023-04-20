import { useState } from 'react'
import {
	ActionButton,
	AvatarImg,
	Table,
	Td,
	Th,
	ThActions,
	ThAvatar,
	ThIndex,
	Tr,
} from './Home.styled'

const users = [
	{
		id: 1,
		name: 'Petr',
		age: 30,
		status: 'Active',
		avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
	},
	{
		id: 2,
		name: 'Vika ',
		age: 25,
		status: 'Inactive',
		avatar: 'https://randomuser.me/api/portraits/women/2.jpg',
	},
	{
		id: 3,
		name: 'Olena',
		age: 25,
		status: 'Active',
		avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	{
		id: 13,
		name: 'Mary',
		age: 25,
		status: 'Active',
		avatar: 'https://randomuser.me/api/portraits/women/3.jpg',
	},
	{
		id: 4,
		name: 'Jane ',
		age: 25,
		status: 'Inactive',
		avatar: 'https://randomuser.me/api/portraits/women/4.jpg',
	},
]

export const Home = () => {
	const [userList, setUserList] = useState(users)

	const handleEdit = id => {
		console.log(`Editing user with id ${id}`)
	}

	const handleDelete = id => {
		const updatedList = userList.filter(user => user.id !== id)
		setUserList(updatedList)
	}

	return (
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
	)
}
