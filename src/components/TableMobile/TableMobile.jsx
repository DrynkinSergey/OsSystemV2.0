import { ActionButton } from '../../pages/Home/Home.styled'
import Avatar from '../Avatar'
import { AvatarSpan, Li, Span, TitleSpan, Ul } from './TableMobile'

export const TableMobile = ({
	handleDelete,
	handleEdit,
	id,
	avatar,
	status,
	name,
	age,
}) => {
	return (
		<Ul>
			<Li>
				<TitleSpan>Avatar</TitleSpan>
				<AvatarSpan>
					<Avatar svg={avatar} />
				</AvatarSpan>
			</Li>
			<Li>
				<TitleSpan>Name</TitleSpan>
				<Span>{name}</Span>
			</Li>
			<Li>
				<TitleSpan>Age</TitleSpan>
				<Span>{age}</Span>
			</Li>
			<Li>
				<TitleSpan>Status</TitleSpan>
				<Span>{status}</Span>
			</Li>

			<Li>
				<TitleSpan>Options</TitleSpan>
				<div>
					<ActionButton onClick={() => handleEdit(id)}>Edit</ActionButton>
					<ActionButton remove onClick={() => handleDelete(id)}>
						Delete
					</ActionButton>
				</div>
			</Li>
		</Ul>
	)
}
