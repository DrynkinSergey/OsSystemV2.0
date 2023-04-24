import PropTypes from 'prop-types'

import { ActionButton } from '../../pages/Home/Home.styled'
import Avatar from '../Avatar'
import { AvatarSpan, Li, Span, TitleSpan } from './MobileView.styled'

export const MobileViewItem = ({
	handleDelete,
	handleEdit,
	id,
	avatar,
	status,
	name,
	age,
}) => {
	return (
		<>
			<Li status={status}>
				<TitleSpan>Avatar</TitleSpan>
				<AvatarSpan>
					<Avatar svg={avatar} />
				</AvatarSpan>
			</Li>
			<Li status={status}>
				<TitleSpan>Name</TitleSpan>
				<Span>{name}</Span>
			</Li>
			<Li status={status}>
				<TitleSpan>Age</TitleSpan>
				<Span>{age}</Span>
			</Li>
			<Li status={status}>
				<TitleSpan>Status</TitleSpan>
				<Span>{status}</Span>
			</Li>

			<Li status={status}>
				<TitleSpan>Options</TitleSpan>
				<div>
					<ActionButton onClick={() => handleEdit(id)}>Edit</ActionButton>
					<ActionButton remove onClick={() => handleDelete(id)}>
						Delete
					</ActionButton>
				</div>
			</Li>
		</>
	)
}
MobileViewItem.propTypes = {
	handleDelete: PropTypes.func.isRequired,
	handleEdit: PropTypes.func.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	age: PropTypes.string.isRequired,
	status: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
}
