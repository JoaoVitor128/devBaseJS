import { useState } from 'react'
import './App.css'

import { Outlet } from 'react-router-dom'
import Nav from './components/Nav.jsx'

function App() {

  return (
    <>
    <Nav/>
    <Outlet/>
    <footer>VAGAS ABERTAS PARA A GUILDA • CURSO 100% GRATUITO • APRENDA JAVASCRIPT • VAGAS ABERTAS</footer>
    </>
  )
}

export default App
