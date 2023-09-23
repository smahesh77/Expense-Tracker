import React from 'react'
import { Container, Flex, Text, Center } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import dashboard from '../assets/More_Grid_Big.svg'
import edit from '../assets/Note_Edit.svg'
import del from '../assets/del_alt_fill.svg'
import profile from '../assets/User_02.svg'
const Sidebar = () => {
    
    return (
     
        <VStack >
            <Tabs  size='lg' isFitted orientation="vertical"   >
                <TabList >
                    <Tab>
                        
                       <img src={dashboard}/>
                       <Text >&nbsp;Dashboard</Text>
                      
                       
                    </Tab>
                    <Tab>
                     <img src={edit}/>
                     <Text>&nbsp;Transactions</Text>
                    </Tab>

                    <Tab>
                      <img src={del}/>
                      <Text>&nbsp;Bucket List</Text>
                    </Tab>
          <Tab>
            <img src={profile}/>
            <Text>&nbsp;Profile</Text>
          </Tab>
                </TabList>
            </Tabs>
        </VStack>
        
           
    )
}

export default Sidebar