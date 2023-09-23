import React, { useContext, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { Container, Flex, Text, Center } from "@chakra-ui/react";
import wavehand from "../assets/Waving Hand.svg";
import { Select } from "@chakra-ui/react";
import women from "../assets/People.svg";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { HStack, VStack } from "@chakra-ui/react";
import AuthContext from "../contexts/authContext";
import { useNavigate } from "react-router-dom";
const Navbar = () => {

  useEffect(() => {
    if(User.name== ""){
      navigate('/')
    }
  },[]);

  const { User, setUser } = useContext(AuthContext);
  const navigate = useNavigate()
  const signOut = () => {
    localStorage.removeItem("accessToken");
    setUser({
      id: "",
      name: "",
      balance: 0,
      debt: 0,
      token: null,
      gmail: "",
      status: false,
    });
    console.log(User.status);

    navigate("/");
  };

  return (
    <Flex direction="row" justify="space-evenly" mt="10">
      <HStack>
        <Text mr="4" fontSize="30" fontWeight="bold">
          Hello {User.name}
        </Text>
        <img src={wavehand} width={40} />
      </HStack>
      <HStack>
        <Select placeholder="Personal">
          <option value="home">Home</option>
        </Select>
      </HStack>
      <HStack>
        <img src={women} width={45} />
        <Button bgColor={"purple.300"} Color={"white"} onClick={signOut}>
          Logout
        </Button>
      </HStack>
    </Flex>
  );
};

export default Navbar;
