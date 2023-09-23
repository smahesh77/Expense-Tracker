
import { Center, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Signin from './pages/Signin'
import TransactionsPage from './pages/TransactionsPage'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
function App() {


  return (
  //test

    <div className="App">

      <Routes>
        <Route path='/' element={<Signin></Signin>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/transactions' element={<TransactionsPage></TransactionsPage>}></Route>
      </Routes>
    </div>
  )
}

export default App
