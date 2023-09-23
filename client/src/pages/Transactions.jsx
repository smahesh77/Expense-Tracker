import React, { useState } from 'react';
import { HStack, VStack } from '@chakra-ui/react'
import { Container, Text, Flex, Grid, GridItem } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'

function Transactions() {
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [location, setLocation] = useState('');
    const [incomeTitle, setIncomeTitle] = useState('');
  const [incomePrice, setIncomePrice] = useState('');
  const [incomeCategory, setIncomeCategory] = useState('');
  const [incomeLocation, setIncomeLocation] = useState('');

    // Event handlers to update state variables
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleCategoryChange = (e) => {
        setCategory(e.target.value);
    };

    const handleLocationChange = (value) => {
        setLocation(value);
    };
    const handleIncomeTitleChange = (e) => {
        setIncomeTitle(e.target.value);
      };
    
      const handleIncomePriceChange = (e) => {
        setIncomePrice(e.target.value);
      };
    
      const handleIncomeCategoryChange = (e) => {
        setIncomeCategory(e.target.value);
      };
    
      const handleIncomeLocationChange = (value) => {
        setIncomeLocation(value);
      };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formType === 'expense') {
            console.log('Expense Title:', expenseTitle);
            console.log('Expense Price:', expensePrice);
            console.log('Expense Category:', expenseCategory);
            console.log('Expense Location:', expenseLocation);
          } else if (formType === 'income') {
            console.log('Income Title:', incomeTitle);
            console.log('Income Price:', incomePrice);
            console.log('Income Category:', incomeCategory);
            console.log('Income Location:', incomeLocation);
          }
    };
    return (
        <Flex direction='row' justify='space-between' ml='250' mt='20'>
            <Flex direction='column' justify='space-between'>
                <Text fontSize={'40px'}>Add Expenses</Text>
                <form onSubmit={(e) => handleSubmit(e, 'expense')}>
                    <Flex mt={6} direction='column' >
                        <Input placeholder='Title' mb={10} onChange={handleTitleChange}></Input>
                        <Input placeholder='Price' onChange={handlePriceChange}></Input>
                        <Select placeholder='Category' mt={10} onChange={handleCategoryChange}>
                            <option value='electricity'>Electricity</option>
                            <option value='rent'>Rent</option>
                            <option value='health'>Health</option>
                            <option value='entertaintment'>Entertaintment</option>
                            <option value='food'>Food</option>
                        </Select>
                        <HStack mt={10}>
                            <Radio value='Home' mr={3} isChecked={location === 'Home'}
                                onChange={() => handleLocationChange('Home')}>Home</Radio>
                            <Radio value='Personal' isChecked={location === 'Personal'}
                                onChange={() => handleLocationChange('Personal')}>Personal</Radio>
                        </HStack>
                        <Button mt={10} type='submit' bgColor={'purple.100'}>
                            Add
                        </Button>
                    </Flex>
                </form>




            </Flex>

            <Flex direction='column' justify='space-between' ml={80}>
                <Text fontSize={'40px'}>Add Income</Text>
                <form onSubmit={(e) => handleSubmit(e, 'income')}>
                <Flex mt={6} direction='column' >
                    <Input placeholder='Title' mb={10} onChange={handleIncomeTitleChange}></Input>
                    <Input placeholder='Price' onChange={handleIncomePriceChange}></Input>
                    <Select placeholder='Category' mt={10} onChange={handleIncomeCategoryChange}>
                        <option value='bonus'>Bonus</option>
                        <option value='salary'>Salary</option>

                    </Select>
                    <HStack mt={10}>
                        <Radio value='Home' mr={3} isChecked={incomeLocation === 'Home'}
                                onChange={() => handleIncomeLocationChange('Home')}>Home</Radio>
                        <Radio value='Personal'  isChecked={incomeLocation === 'Personal'}
                                onChange={() => handleIncomeLocationChange('Personal')}>Personal</Radio>
                    </HStack>
                    <Button mt={10} type='submit' bgColor={'purple.100'}>
                        Add
                    </Button>
                </Flex>
             

          </form>

            </Flex>



        </Flex>
    )
}

export default Transactions