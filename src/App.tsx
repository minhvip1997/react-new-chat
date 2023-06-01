import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='conversations' element={<div>
          <div>Conversations</div>
          <Outlet/>
        </div>}></Route>
        <Route path=':id' element={<div>Conversation ID Page</div>}></Route>
      </Routes>
    </>
  )
}

export default App
