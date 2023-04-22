import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { createGlobalStyle } from 'styled-components'
import { persistor, store } from './redux/index.js'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Calc } from './Const.js'

const Global = createGlobalStyle`
	*{
		margin:0;
		padding: 0;
	}
	body{
	font-size: ${Calc};

		min-height: 100vh;
		font-family: 'Avenir', sans-serif;

	}
`

ReactDOM.createRoot(document.getElementById('root')).render(
	<PersistGate loading={null} persistor={persistor}>
		<Provider store={store}>
			<BrowserRouter>
				<Global />
				<App />
			</BrowserRouter>
		</Provider>
	</PersistGate>
)
