import { Outlet } from 'react-router-dom'

export const Layout = () => {
	return (
		<>
			<Outlet fallback={null} />
		</>
	)
}
