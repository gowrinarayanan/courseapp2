import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './components/Login';
import Nav from './components/Nav'
import Add from './components/Add'
import Home from './components/Home'


import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <br />
      <br />
      <Routes>
      <Route path='/login' element={<Login />} />
      <Route path = '/' element = {<Home/>}></Route>
      <Route path = '/add' element = {<Add/>}></Route>
      {/* <Route path="/login" element={<Login />} /> */}
      
     </Routes>
      
      
    </>
  )
}

export default App