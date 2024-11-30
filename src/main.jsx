import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import BasicExample from './components/BasicExample'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BasicExample />
  </StrictMode>,
)
