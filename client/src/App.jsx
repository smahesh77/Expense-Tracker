import { Container, Flex, Heading, Image , Input , Button} from '@chakra-ui/react'
import './App.css'
import Navbar from './Components/Navbar'
import Profile from './pages/profile'
import Sidebar from './Components/Sidebar'
function App() {
 
  return (
    <div className="App">
      <Navbar/>
      <Flex direction='row'>
        <Flex direction={'column'}><Sidebar/></Flex>
        <Flex direction={'column'}><Profile/></Flex>
        </Flex>
    </div>
  )
}

export default App
