import React from 'react'

import { Center, Flex } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Dashboard from './Dashboard'
import Profile from './profile'
const ProfilePage = () => {
    return (
        <div className="App">
          <Navbar />
          <Flex>
            <Sidebar />
            <Profile />
          </Flex>
        </div>
      )
}

export default ProfilePage