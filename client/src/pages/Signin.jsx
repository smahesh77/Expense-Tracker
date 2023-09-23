import {Container, Flex, Heading} from '@chakra-ui/react'

const Signin = () => {
    return ( 
        <Flex direction={'row'}>
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'50vw'} h={'100vh'} bgColor={'purple.50'}>
                <Container></Container>
                <Heading mb={3}>Welcome Back!</Heading>
                <p text-align="center">To keep connected with us please enter your personal details</p>
            </Flex>
            <Flex  w={'50vw'} h={'100vh'}></Flex>
        </Flex>
     );
}
 
export default Signin;