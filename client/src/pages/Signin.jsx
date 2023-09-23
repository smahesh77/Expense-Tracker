import React, { useState } from 'react';
import { Container, Flex, Heading, Image, Input, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignIn = () => {
        // You can access the email and password values here
        console.log('Email:', email);
        console.log('Password:', password);

        // Add your authentication logic here
        // For example, you can send a POST request to your server with the email and password

        // After successful authentication, navigate to the desired route
        navigate('/home');
    };

    return (
        <Flex direction={'row'} h={'100vh'} w={'100vw'}>
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'50vw'} h={'100vh'} bgColor={'purple.50'}>
                <Container h={200} w={300}><Image src="src/assets/sign_up_image.jpg" /></Container>
                <Heading mb={3}>Welcome Back!</Heading>
                <p text-align="center">To keep connected with us, please enter your personal details</p>
            </Flex>
            <Flex w={'50vw'} h={'100vh'} alignItems={'center'} justifyContent={'center'}>
                <Flex h={400} w={300} bgColor={'purple.100'} borderRadius={15} alignItems={'center'} flexDirection={'column'} justifyContent={'center'}>
                    <Input
                        variant="filled"
                        placeholder="Enter email"
                        w={250}
                        mb={2}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Input
                        variant="filled"
                        placeholder="Enter password"
                        w={250}
                        mb={4}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Button bgColor={'purple.300'} onClick={handleSignIn}>Sign in</Button>
                    <Text>New User?<Text col>Sign up.</Text></Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Signin;
