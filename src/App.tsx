import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Outlet, Route, Routes } from 'react-router-dom'
import RegisterPage from './pages/Register'
import LoginPage from './pages/Login'
import Conversations from './pages/Conversations'
import ConversationsChanelPage from './pages/ConversationsChanelPage'
import ConversationsSideBar from './components/conversations/ConversationsSideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/register' element={<RegisterPage/>}></Route>
        <Route path='/login' element={<LoginPage/>}></Route>
        <Route path='conversations' element={<Conversations/>}>
        {/* <Route index element={<Conversations/>}/> */}
        <Route path=':id' element={<ConversationsChanelPage/>}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
