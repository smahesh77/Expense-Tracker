import { Tabs, TabList, Tab, Text ,Box} from '@chakra-ui/react'
import dashboard from '../assets/More_Grid_Big.svg'
import edit from '../assets/Note_Edit.svg'
import pie from '../assets/Pipe.svg'
import profile from '../assets/User_02.svg'
import { useNavigate } from 'react-router-dom';
const Sidebar = () => {
    const navigate = useNavigate()

    return (

        <Tabs size='lg' orientation="vertical" minWidth={180} colorScheme='purple' h={'100vh'} bgColor={'purple.50'} borderRadius={10} mt={'-15vh'}>       
            <TabList  >
                <Box  h={30} w={30} ml={70} mt={59} mb={7}></Box>
                <Tab onClick={() => navigate('/home')} flexDirection={'row'} justifyContent={'space-between'} w={150} >

                    <img src={dashboard} />
                    <Text>&nbsp;Dashboard</Text>


                </Tab>
                <Tab onClick={() => navigate('/transactions')} flexDirection={'row'} justifyContent={'space-between'} w={150} >
                    <img src={edit} />
                    <Text >&nbsp;Transactions</Text>
                </Tab>

                <Tab onClick={() => navigate('/analysis')} flexDirection={'row'} justifyContent={'space-between'} w={150} gap={1}>
                    <img src={pie}/>
                    <Text mr={10}>Analysis</Text>
                </Tab>

                <Tab onClick={() => navigate('/profilepage')} flexDirection={'row'} justifyContent={'space-between'} w={150} >

                    <img src={profile} />
                    <Text  mr={33}>Profile</Text>
                </Tab>
            </TabList>
        </Tabs>



    )
}

export default Sidebar
