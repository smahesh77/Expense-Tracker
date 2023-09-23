import React from 'react'
import { Container, Flex, Text, Center } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import dashboard from '../assets/More_Grid_Big.svg'
import edit from '../assets/Note_Edit.svg'
const Sidebar = () => {
    return (
        <Flex  justifyContent="flex-start" >
        <VStack>
            <Tabs orientation="vertical">
                <TabList>
                    <Tab>
                        
                       <img src={dashboard}/>
                       <Text >&nbsp;Dashboard</Text>
                      
                       
                    </Tab>
                    <Tab>
                     <img src={edit}/>
                     <Text>&nbsp;Transactions</Text>
                    </Tab>

                    <Tab>
          
                    </Tab>

                </TabList>
            </Tabs>
        </VStack>
        
            </Flex>
    )
}

export default Sidebar