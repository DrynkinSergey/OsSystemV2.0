import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { persistor } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'

const Global = createGlobalStyle`
	*{
		margin:0;
		padding: 0;
	}
	body{
		min-height: 100vh;
	}
`

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<PersistGate loading={null} persistor={persistor}>
			<Global />
			<App />
		</PersistGate>
	</BrowserRouter>
)
