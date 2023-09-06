import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import App from './App.jsx'
import './index.css'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import Vans from './pages/Vans.jsx'
import VanDetails from './pages/VanDetails'
import Layout from './components/Layout'
import Reviews from './pages/Host/Reviews'
import Income from './pages/Host/Income'
import Dashboard from './pages/Host/Dashboard'
import Hostlayout from './components/Hostlayout'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
    <Routes>
      <Route path='/' element={<Layout />}>
          <Route index element={<Home />}/>
          <Route path='about' element={<About />}/>
          <Route path='vans' element={<Vans />}/>
          <Route path='vans/:id' element={<VanDetails />}/>
          
              <Route path='host' element={<Hostlayout />}>
                <Route index element={<Dashboard />}/>
                <Route path='reviews' element={<Reviews />}/>
                <Route path='income' element={<Income />}/>
              </Route>
      </Route>
    </Routes>
  </React.StrictMode>
  </BrowserRouter>,
)
