import { Flex } from '@chakra-ui/react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import Analysis from './Analysis'
const AnalysisPage = () => {
    return (
        <div className="App">
          <Navbar />
          <Flex>
            <Sidebar />
            <Analysis />
          </Flex>
        </div>
      )
}
 
export default AnalysisPage;