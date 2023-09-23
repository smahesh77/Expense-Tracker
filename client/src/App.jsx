
import { Center, Flex } from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import Dashboard from './pages/Dashboard'
import Bucketlist from './pages/Bucketlist'
function App() {

  return (
    <div className="App">
      <Navbar />
      <Flex>
        <Sidebar />
        <Bucketlist />
      </Flex>
    </div>
  )
}

export default App
