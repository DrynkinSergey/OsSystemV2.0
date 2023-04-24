import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useMediaQuery } from 'react-responsive'

import { selectFilteredData } from '../../redux/selectors'
import { removeUser } from '../../redux/userSlice'

import { MobileView } from '../../components/MobileView/MobileView'
import { DesktopView } from '../../components/DesktopView/DesktopView'
import { useToggle } from '../../hooks/useToggle'
import { Modal } from '../../components/Modal/Modal'
import { Button } from '../../components/Form/Form.styled'
import { useState } from 'react'
import styled from 'styled-components'

export const Home = () => {
	const users = useSelector(selectFilteredData)
	const dispatch = useDispatch()
	const [deletedUserId, setDeletedUserId] = useState(null)
	const { isOpen, toggle } = useToggle()
	const navigate = useNavigate()

	const isMobile = useMediaQuery({
		query: '(max-width: 620px)',
	})

	const handleEdit = id => {
		navigate(`/editUser/${id}`)
	}

	const handleDelete = id => {
		toggle()
		setDeletedUserId(id)
	}
	const confirmDelete = () => {
		dispatch(removeUser(deletedUserId))
		setDeletedUserId(null)
		toggle()
	}

	return (
		<>
			{isOpen && (
				<Modal onClose={toggle}>
					<h1>Do you want to delete user?</h1>
					<ModalBtns>
						<Button onClick={confirmDelete}>Yes</Button>
						<Button onClick={toggle}>No</Button>
					</ModalBtns>
				</Modal>
			)}

			{isMobile ? (
				<MobileView
					users={users}
					handleDelete={handleDelete}
					handleEdit={handleEdit}
				/>
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

const ModalBtns = styled.div`
	display: flex;
	justify-content: center;
	gap: 5px;
`
