import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ToastContainer } from 'react-toastify'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<App />
		<ToastContainer theme='dark' toastStyle={{
			fontFamily : "estedad",
			backgroundColor : "#090f1e"
		}}></ToastContainer>
	</StrictMode>
)