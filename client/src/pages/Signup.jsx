import { Container, Flex, Heading, Image , Input , Button} from '@chakra-ui/react'

const Signup = () => {
    return (
        <Flex direction={'row'} h={"100vh"} w={"100vw"} >
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'50vw'} h={'100vh'} bgColor={'purple.50'}>
                <Container h={200} w={300}><Image src="src/assets/sign_up_image.jpg" ></Image></Container>
                <Heading mb={3}>Hello Friend!</Heading>
                <p text-align="center">Enter your personal details and start your journey with us</p>
            </Flex>
            <Flex w={'50vw'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <Flex h={400} w={300} bgColor={'purple.100'} borderRadius={15} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Input variant='filled' placeholder='Enter email' w={250} mb={2} />
                    <Input variant='filled' placeholder='Enter password' w={250} mb={4}/>
                    <Button bgColor={'purple.300'}>Sign Up</Button>
                    <p>Have an account?</p>
                </Flex>
            </Flex>
        </Flex>
    );
}

export default Signup;