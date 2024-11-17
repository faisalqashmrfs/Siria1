import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  <React.StrictMode>
    <BrowserRouter basename='/Siria_Herbs_Website-main/'>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
