import React from 'react'
import { Center, Flex } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
const Home = () => {
    return (
        <div className="App">
          <Navbar />
          <Flex>
            <Sidebar />
            <Dashboard />
          </Flex>
        </div>
      )
  
}

export default Home