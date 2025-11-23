import './index.css'
import App from './App.jsx'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import LoginPage from './pages/LoginPage/index.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
