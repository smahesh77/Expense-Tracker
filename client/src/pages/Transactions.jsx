import React from 'react'
import { HStack, VStack } from '@chakra-ui/react'
import { Container, Text, Flex,Grid,GridItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
function Transactions() {
  return (
    <Flex direction='row' justify='space-between' ml='250'  mt='20'>
    <Flex direction='column' justify='space-between'>
        <Text fontSize={'40px'}>Add Expenses</Text>
        <Flex mt={6} direction='column' >
        <Input placeholder='Title' mb={10}></Input>
    <Input placeholder='Price'></Input>
    <Select placeholder='Category' mt={10}>
  <option value='electricity'>Electricity</option>
  <option value='rent'>Rent</option>
  <option value='health'>Health</option>
  <option value='entertaintment'>Entertaintment</option>
  <option value='water'>Water</option>
</Select>
<HStack mt={10}>
    <Radio value='Home' mr={3}>Home</Radio>
    <Radio value='Personal'>Personal</Radio>
    </HStack>
    <Button mt={10} type='submit' bgColor={'purple.100'}>
      Add
    </Button>
    </Flex>


    
    
    </Flex>
    
    <Flex direction='column' justify='space-between' ml={80}>
        <Text fontSize={'40px'}>Add Income</Text>
        <Flex mt={6} direction='column' >
        <Input placeholder='Title' mb={10}></Input>
    <Input placeholder='Price'></Input>
    <Select placeholder='Category' mt={10}>
  <option value='bonus'>Bonus</option>
  <option value='salary'>Salary</option>
  
</Select>
<HStack mt={10}>
    <Radio value='Home' mr={3}>Home</Radio>
    <Radio value='Personal'>Personal</Radio>
    </HStack>
    <Button mt={10} type='submit' bgColor={'purple.100'}>
      Add
    </Button>
    </Flex>


    
    
    </Flex>
    
    

   </Flex>
  )
}

export default Transactions