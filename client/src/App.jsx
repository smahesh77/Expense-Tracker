
import { Center, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Transactions from './pages/Transactions'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Flex>
        <Sidebar />
      <Transactions/>
      </Flex>
    </div>
  )
}

export default App
