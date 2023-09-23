import { Container, Flex, Text, Image, Input, Button, Box, HStack } from '@chakra-ui/react'
import React, { useContext, useEffect } from "react";
import { BsPencilFill } from 'react-icons/bs';
import { FaCamera } from "react-icons/fa"
import AuthContext from "../contexts/authContext";;
const Profile = () => {
    const { User, setUser } = useContext(AuthContext);
    return (
        <Flex h={450} w={1000} borderRadius={10} mt={4} ml={5} bgColor={'purple.50'} p={4}>
            <Flex direction={'column'}>
                <Image ml={10}
                    borderRadius='full'
                    boxSize='150px'
                    src='https://bit.ly/dan-abramov'
                    alt='Dan Abramov'
                />

                <Flex direction={'row'} mt={14} >
                    <Flex direction={'column'} mr={100} ml={50}>
                        <Text as='b'>First Name:</Text>
                        <HStack>
                            <Text>{User.name}</Text>
                            <Button leftIcon={<BsPencilFill />} colorScheme="purple" variant="ghost"/>
                        </HStack>
                    </Flex>
                    <Flex direction={'column'}>
                        <Text as='b'>Last Name:</Text>
                        <HStack>
                            <Text>Smith </Text>
                            <Button leftIcon={<BsPencilFill />} colorScheme="purple" variant="ghost" />
                        </HStack>
                    </Flex>
                </Flex>
                <Flex direction={'row'} mt={11.9} mb={4}>
                    <Flex direction={'column'} mr={125} ml={50}>
                        <Text as='b'>Phone no:</Text>
                        <HStack>
                            <Text>9048576944</Text>
            
                        </HStack>
                    
                    </Flex>
                    <Flex direction={'column'} >
                        <Text as='b'>Email:</Text>
                        <HStack>
                            <Text>{User.email}</Text>
                            
                        </HStack>
                    
                    </Flex>
                </Flex>
                <Button ml={50}  mt={4} colorScheme="purple" w={40} borderRadius={30}>Save</Button>
            </Flex>

        </Flex>
    );
};

export default Profile;




