import Avatar from '../../components/Avatar'
import { Filter } from '../../components/Filter/Filter'
import {
	ActionButton,
	Table,
	Td,
	Th,
	ThActions,
	ThAvatar,
	ThIndex,
	Tr,
} from '../Home/Home.styled'

export const DesktopView = ({ users, handleDelete, handleEdit }) => {
	return (
		<>
			<Filter />
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
						<Tr key={user.id} status={user.status}>
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
								<ActionButton remove onClick={() => handleDelete(user.id)}>
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
