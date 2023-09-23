import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import {Container,Flex, Text,Center} from '@chakra-ui/react'
import wavehand from '../src/assets/Waving Hand.svg'
import { Select } from '@chakra-ui/react'
import women from '../src/assets/People.svg'
import { Button, ButtonGroup } from '@chakra-ui/react'
import {  HStack, VStack } from '@chakra-ui/react'
const Dashboard=()=>{
  return(
  <Flex direction='row' justify='space-between' >
<HStack >
  <Text mr='4' fontSize='30' fontWeight="bold">
  Hello Jordan 
  </Text>
  <img src={wavehand} width={40}/>
</HStack>
<HStack>
<Select placeholder='Personal'>
</Select>
</HStack>
<HStack>
<img src={women} width={45}/>
<Button bgColor={'purple.300'} Color={'white'}>Logout</Button>
</HStack>

 </Flex>
 
  )
}

export default Dashboard