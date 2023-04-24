import { useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { CloseButton, ModalContent, ModalWrapper } from './Modal.styled'

const modalDiv = document.querySelector('#modal')

export const Modal = ({ onClose, children }) => {
	const handleKeydown = useCallback(
		e => {
			if (e.key === 'Escape') {
				onClose()
			}
		},
		[onClose]
	)

	const onBackdropClick = e => {
		if (e.target === e.currentTarget) {
			onClose()
		}
	}

	useEffect(() => {
		document.addEventListener('keydown', handleKeydown)
		return () => {
			document.removeEventListener('keydown', handleKeydown)
		}
	}, [handleKeydown])

	return ReactDOM.createPortal(
		<ModalWrapper onClick={onBackdropClick}>
			<ModalContent>
				<CloseButton onClick={onClose}>×</CloseButton>
				{children}
			</ModalContent>
		</ModalWrapper>,
		modalDiv
	)
}
