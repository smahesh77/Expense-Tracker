import React, { useContext, useState } from "react";
import {
  Container,
  Flex,
  Heading,
  Image,
  Input,
  Button,
  Text
} from "@chakra-ui/react";
import apiClient from "../services/api-client";
import { useNavigate, Link } from 'react-router-dom';
import AuthContext from '../contexts/authContext';

const Signup = () => {
  // Define state variables for name, email, and password
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const {User, setUser} = useContext(AuthContext)
  // Function to handle the "Sign Up" button click
  const handleSignUp = () => {
    const data = { email: email, password: password, name: name };
    apiClient.post("/user/sign", data).then((res) => {
      alert("User Created");
      localStorage.setItem("accessToken", res.data.token);
      navigate("/");
    });
  };

  return (
    <Flex direction={"row"} h={"100vh"} w={"100vw"}>
      <Flex
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        w={"50vw"}
        h={"100vh"}
      >
        <Container h={200} w={300}>
          <Image src="src/assets/sign_up_image.jpg" />
        </Container>
        <Heading mb={3}>Hello Friend!</Heading>
        <p text-align="center">
          Enter your personal details and start your journey with us
        </p>
      </Flex>
      <Flex
        w={"50vw"}
        h={"100vh"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Flex
          h={400}
          w={300}
          bgColor={"purple.100"}
          borderRadius={15}
          alignItems={"center"}
          flexDirection={"column"}
          justifyContent={"center"}
        >
          {/* Name input */}
          <Input
            variant="filled"
            placeholder="Enter name"
            w={250}
            mb={2}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {/* Email input */}
          <Input
            variant="filled"
            placeholder="Enter email"
            w={250}
            mb={2}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* Password input */}
          <Input
            variant="filled"
            placeholder="Enter password"
            w={250}
            mb={4}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button bgColor={"purple.300"} onClick={handleSignUp} mb={3}>
            Sign Up
          </Button>
          <Text>Have an account?</Text>
          <Text color={'purple.500'} fontWeight={'semibold'}><Link to='/' >Sign in</Link></Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Signup;
