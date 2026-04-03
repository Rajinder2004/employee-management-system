import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ProvideContext from './context/ProvideContext.jsx'

createRoot(document.getElementById('root')).render(
  <ProvideContext>
    <App />
  </ProvideContext>
)
