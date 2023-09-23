import { Container, Flex, Heading, Image , Input , Button} from '@chakra-ui/react'

const Signin = () => {
    return (
        <Flex direction={'row'} h={"100vh"} w={"100vw"} >
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'50vw'} h={'100vh'} bgColor={'purple.50'}>
                <Container h={200} w={300}><Image src="src/assets/sign_up_image.jpg" ></Image></Container>
                <Heading mb={3}>Welcome Back!</Heading>
                <p text-align="center">To keep connected with us please enter your personal details</p>
            </Flex>
            <Flex w={'50vw'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <Flex h={400} w={300} bgColor={'purple.100'} borderRadius={15} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Input variant='filled' placeholder='Enter email' w={250} mb={2} />
                    <Input variant='filled' placeholder='Enter password' w={250} mb={4}/>
                    <Button bgColor={'purple.300'}>Sign In</Button>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Signin;