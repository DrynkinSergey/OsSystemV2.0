import PropTypes from 'prop-types'
import Avatar from '../Avatar'
import { Filter } from '../Filter/Filter'
import {
	ActionButton,
	Table,
	Td,
	Th,
	ThActions,
	ThAvatar,
	ThIndex,
	Tr,
} from '../../pages/Home/Home.styled'

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
					{users.map(({ id, name, age, status, avatar }, index) => (
						<Tr key={id} status={status}>
							<Td>{index + 1}</Td>
							<Td>
								<Avatar svg={avatar} />
							</Td>
							<Td>{name}</Td>
							<Td>{age}</Td>
							<Td>{status === 'yes' ? 'Active' : '-'}</Td>
							<Td>
								<ActionButton onClick={() => handleEdit(id)}>Edit</ActionButton>
								<ActionButton remove onClick={() => handleDelete(id)}>
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

DesktopView.propTypes = {
	handleDelete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
	users: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			age: PropTypes.string,
			status: PropTypes.string,
			avatar: PropTypes.string,
		})
	).isRequired,
}
