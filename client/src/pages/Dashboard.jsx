import React from 'react'
import Navbar from '../Components/Navbar'
import Signup from './Signup'

function Dashboard() {
  return (
    <div className='dashboard'>
      <Container>
        <Text>Your income</Text>
        <Text>{"17,000"}</Text>
      </Container>
    </div>
  )
}

export default Dashboard