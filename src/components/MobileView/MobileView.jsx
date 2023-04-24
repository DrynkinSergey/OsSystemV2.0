import PropTypes from 'prop-types'

import { Ul } from './MobileView.styled'
import { MobileViewItem } from './MobileViewItem'
import { Filter } from '../Filter/Filter'

export const MobileView = ({ users, handleDelete, handleEdit }) => {
	if (!users.length) {
		return <h1>No data... Please, add users!</h1>
	}
	return (
		<>
			<Filter />
			<Ul>
				{users.map(user => (
					<MobileViewItem
						key={user.id}
						handleDelete={handleDelete}
						handleEdit={handleEdit}
						{...user}
					/>
				))}
			</Ul>
		</>
	)
}
MobileView.propTypes = {
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
