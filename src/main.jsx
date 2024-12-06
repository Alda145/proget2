import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

  <Router
    future={{
      v7_relativeSplatPath: true,
    }}>
    <Routes>
      <Route path='*' element={<App />} />
    </Routes>
  </Router>


)
