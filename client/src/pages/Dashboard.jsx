import React, { useContext, useEffect } from "react";
import { Container, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import Itembox from '../Components/Itembox';
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import apiClient from "../services/api-client";

function Dashboard() {
  const navigate = useNavigate();
  const labels = ["January", "February", "March", "April", "May", "June"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Income",
        backgroundColor: "rgb(92, 89, 240)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Expense",
        backgroundColor: "rgb(165, 166, 246)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, -10, -5, -2, -20, -30, -45],
      },
    ],
  };
  const { User, setUser } = useContext(AuthContext);

  useEffect(() => {
    if (User.name == "") {
      navigate('/')
    }
    const data = { id: User.id };
    apiClient
      .post("/user/getuserdata", data)
      .then((res) => {
        console.log(res.data);
        setUser({
          ...User,
          balance: res.data.user.balance,
          debt: res.data.user.debt,
          status: true,
          gmail: res.data.gmail,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let items = [
    { id: "1", title: "Pizza", price: "20", category: "Food" },
    { id: "2", title: "House Bills", price: "60", category: "Rent" }
  ];
  return (
    <Grid
      h={'450'} w={1000} p={4} ml={4} mt={3}
      templateRows='repeat(2, 1fr)'
      templateColumns='repeat(5, 1fr)'
      gap={4}
      borderRadius={10}
    >

      <GridItem colSpan={2} bg='white' borderRadius={10} h={120} w={200} bgColor={'purple.300'} flexDirection={'column'} p={3} boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}>
        <Text fontWeight={'bold'} fontSize={20} >Your balance</Text>
        <Flex direction={'row'}>
          <Text>${User.balance}</Text>
          <IoIosArrowRoundUp size={25} />
        </Flex>
      </GridItem>
      <GridItem colSpan={2} bg='white' borderRadius={10} h={120} w={200} bgColor={'purple.200'} ml={-10} flexDirection={'column'} p={3} boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}>
        <Text fontWeight={'bold'} fontSize={20} >Your expense</Text>
        <Flex direction={'row'}>
          <Text>$7,000</Text>
          <IoIosArrowRoundDown size={25} />
        </Flex>
      </GridItem>
      <GridItem rowSpan={2} colSpan={1} bg='white' borderRadius={10} w={350} flexDirection={'column'} align={'center'} justifyContent={'center'} p={4} boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"} >
        {items.map((i) => (
          <Itembox title={i.title} price={i.price} category={i.category} />
        ))}
      </GridItem>
      <GridItem colSpan={4} bg='white' p={3} borderRadius={10} h={250} w={450} boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}>
        <Bar data={data} />
      </GridItem>
    </Grid>
  )
}

export default Dashboard
