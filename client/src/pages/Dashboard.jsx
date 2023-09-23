import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Container, Text, Flex } from '@chakra-ui/react'
function Dashboard() {
  return (
    <Flex flexDirection={'column'} bgColor={'purple.100'} w={900}>
      <Flex flexDirection={'column'} w={500} bgColor={'blue.200'} >
        <Flex flexDirection={'row'}>
          <Container w={200} h={100} flexDirection={'column'} bgColor={'purple.300'} borderRadius={10} p={5}>
            <Text>Your income</Text>
            <Text>$17,000</Text>
          </Container>
          <Container w={200} h={100} flexDirection={'column'} bgColor={'purple.300'} borderRadius={10} p={5}>
            <Text>Your expense</Text>
            <Text>$7,000</Text>
          </Container>
        </Flex>
        <Container w={350} h={250} bgColor={'green'} mt={10}>Stats</Container>
      </Flex>
    </Flex>
  )
}

export default Dashboard