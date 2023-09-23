import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import wavehand from '../src/assets/wavehand'
function Dashboard() {
  return (
    <div className='dashboard_top'>
      <div className='dash_name'>
         <p>Hello Jordan <img src={wavehand}></img> </p>
      </div>
    </div>
  )
}

export default Dashboard