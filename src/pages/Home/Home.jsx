import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import { selectUsers } from '../../redux/selectors'
import { removeUser } from '../../redux/userSlice'

import { Filter } from '../../components/Filter/Filter'
import { MobileView } from '../../components/MobileView/MobileView'
import { DesktopView } from '../../components/DesktopView/DesktopView'

export const Home = () => {
	const users = useSelector(selectUsers)
	const dispatch = useDispatch()

	const navigate = useNavigate()

	const isMobile = useMediaQuery({
		query: '(max-width: 620px)',
	})

	const handleEdit = id => {
		navigate(`/editUser/${id}`)
	}

	const handleDelete = id => {
		dispatch(removeUser(id))
	}

	return (
		<>
			{isMobile ? (
				<>
					<Filter />
					{users.map(user => (
						<MobileView
							handleDelete={handleDelete}
							handleEdit={handleEdit}
							key={user.id}
							{...user}
						/>
					))}
				</>
			) : (
				<DesktopView
					users={users}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
			)}
		</>
	)
}
