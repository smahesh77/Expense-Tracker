import { Container, Flex, Box, Text } from "@chakra-ui/react"; // Import Box component
import Pichartt from "../Components/Pichartt";
import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/authContext";
import apiClient from "../services/api-client";
import Itembox from "../Components/Itembox";

const Analysis = () => {
  const [items, setItems] = useState([]);
  const { User, setUser } = useContext(AuthContext);

  useEffect(() => {
    const edata = { userid: User.id };
    apiClient
      .post("/expense/getuserexpens", edata)
      .then((res) => {
        console.log(res.data.userExpenses);
        setItems(res.data.userExpenses || []);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Flex h={'80vh'} w={'83vw'} bgColor={"purple.50"} mt={4} ml={5} p={4} borderRadius={20} direction={'row'}  justifyContent={'space-between'}>
      <Flex direction={"row"}>
        <Container h={350} w={400}>
          <Pichartt />
        </Container>
      </Flex>
      <Box
        bg="white"
        borderRadius={10}
        w={400}
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        p={4}
        minH={'75vh'}
        
        overflowY="auto"
        sx={
          { 
         '::-webkit-scrollbar':{
                display:'none'
            }
         }
       }
        maxHeight="350px" // Set a max height for the scrollable area
      >
        <Text marginBottom={3} fontWeight={'bold'} fontSize={25}>My Expenses</Text>
        {items.map((i) => (
          <Itembox title={i.name} price={i.amount} category={i.cat} key={i._id} />
        ))}
      </Box>
    </Flex>
  );
};

export default Analysis;
