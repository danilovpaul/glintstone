import { createRoot } from 'react-dom/client'
import { StrictMode } from 'react'
import { App } from './App'

const app = document.querySelector('#app')!
const root = createRoot(app)

root.render(
	<StrictMode>
		<App />
	</StrictMode>
)