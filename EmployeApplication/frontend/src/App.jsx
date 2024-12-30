import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './components/NavBar'
import { Route, Routes } from 'react-router-dom'
import Add from './components/Add'
import Display from './components/Display'

function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/add" element={<Add />} />
        <Route path="/dis" element={<Display />} />
     </Routes>
    </>
  )
}

export default App
