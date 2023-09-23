import React from 'react'
import { Container, Flex, Text, Center } from '@chakra-ui/react'
import { HStack, VStack } from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import dashboard from '../assets/More_Grid_Big.svg'
import edit from '../assets/Note_Edit.svg'
import del from '../assets/del_alt_fill.svg'
import profile from '../assets/User_02.svg'
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()

    return (

        <Tabs size='lg' orientation="vertical" minWidth={180} >
            <TabList  >
                <Tab onClick={() => navigate('/home')} flexDirection={'row'} justifyContent={'space-between'} w={150}>

                    <img src={dashboard} />
                    <Text>&nbsp;Dashboard</Text>


                </Tab>
                <Tab onClick={() => navigate('/transactions')} flexDirection={'row'} justifyContent={'space-between'} w={150}>
                    <img src={edit} />
                    <Text >&nbsp;Transactions</Text>
                </Tab>

                <Tab flexDirection={'row'} justifyContent={'space-between'} w={150}>
                    <img src={del} />
                    <Text>Bucket List</Text>
                </Tab>
                <Tab flexDirection={'row'} justifyContent={'space-between'} w={150}>
                    <img src={profile} />
                    <Text  mr={33}>Profile</Text>
                </Tab>
            </TabList>
        </Tabs>



    )
}

export default Sidebar