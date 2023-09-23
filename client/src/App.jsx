
import { Center, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Bucketlist from './pages/Bucketlist'
function App() {

 return (
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
