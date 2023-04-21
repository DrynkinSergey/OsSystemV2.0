import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CreatePage, EditPage, Home, NotFoundPage } from './pages'

export const App = () => {
	return (
		<>
			<Routes>
				<Route element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='/editUser/:id' element={<EditPage />} />
					<Route path='/newUser' element={<CreatePage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</>
	)
}
