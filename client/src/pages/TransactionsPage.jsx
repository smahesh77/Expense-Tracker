import React from 'react'
import { Center, Flex } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
import Transactions from './Transactions'
const Home = () => {
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

export default Home