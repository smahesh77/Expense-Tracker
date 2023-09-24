import React, { useContext, useState } from 'react';
import { Container, Flex, Heading, Image, Input, Button, Text } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';
import apiClient from "../services/api-client";

const Signin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const {User, setUser} = useContext(AuthContext)

    const handleSignIn = () => {
        const data = { email: email, password: password };
        apiClient
          .post("/user/login", data)
          .then((res) => {
            if (res.data.error) {
              alert(res.data.error);
            } else {
              alert("Login successful, welcome " + res.data.name);
              localStorage.setItem("accessToken", res.data.token);
              console.log(res.data)
              setUser({
                id: res.data.id,
                name: res.data.name,
                token: res.data.token,
                balance:res.data.user.balance,
                debt:res.data.user.debt,
                status: true,
                gmail:res.data.gmail
              });
              navigate("/home");
            }
          })
          .catch((err) => {
            console.log(err.message);
          });
      };

    return (
        <Flex direction={'row'} h={'100vh'} w={'100vw'}>
            <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'50vw'} h={'100vh'} >
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
                    <Button bgColor={'purple.300'} onClick={handleSignIn} mb={3}>Sign in</Button>
                    <Text>New User?</Text>
                    <Text color={'purple.500'} fontWeight={'semibold'}><Link color='blue' to='/signup'>Sign up.</Link></Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Signin;
