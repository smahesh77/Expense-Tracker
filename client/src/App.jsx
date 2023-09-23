
import { Center, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import TransactionsPage from './pages/TransactionsPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/profile'
import AuthProvider from './services/authProvider'
function App() {


  return (
  //test

    <AuthProvider>

      <Routes>
        <Route path='/' element={<Signin></Signin>}></Route>
        <Route path='/signup' element={<Signup></Signup>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/transactions' element={<TransactionsPage></TransactionsPage>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
