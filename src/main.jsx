import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Tnav from './nav/Tnav.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
     <div className="z-50 flex fixed top-0 w-full items-start justify-between">
  <Tnav />
     </div>
  
    <App />

    
  </StrictMode>,
)
