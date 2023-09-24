import { Container, Flex, Box,Heading } from "@chakra-ui/react"; // Import Box component
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
    <Flex h={450} w={1000} bgColor={"purple.50"} mt={4} ml={5} p={4}>
      <Flex direction={"row"}>
        <Container h={350} w={400}>
          <Pichartt />
        </Container>
      </Flex>
      <Box
        rowSpan={2}
        colSpan={1}
        bg="white"
        borderRadius={10}
        w={350}
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        p={4}
        boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}
        overflowY="auto" // Add overflow-y to make the content scrollable
        maxHeight="350px" // Set a max height for the scrollable area
      >
        <Heading marginBottom={3}>My Expenses</Heading>
        {items.map((i) => (
          <Itembox title={i.name} price={i.amount} category={i.cat} key={i._id} />
        ))}
      </Box>
    </Flex>
  );
};

export default Analysis;
