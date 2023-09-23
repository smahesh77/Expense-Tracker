import React from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { Container, Text, Flex ,Grid, GridItem} from '@chakra-ui/react'
function Dashboard() {
  return (
    <Grid bgColor={'purple.100'}
      h={'450'} w={1000} p={4} ml={4} mt={3}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      borderRadius={10}
    >
   
      <GridItem colSpan={2} bg='white' borderRadius={10} h={120} w={200} >
        
      </GridItem>
      <GridItem colSpan={2} bg='white' borderRadius={10} h={120} w={200}ml={-40}></GridItem>
      <GridItem rowSpan={2} colSpan={1} bg='white'  borderRadius={10} w={220}></GridItem>
      <GridItem colSpan={4}  bg='white'  borderRadius={10} h={250} w={400}></GridItem>
    </Grid>
  )
}

export default Dashboard