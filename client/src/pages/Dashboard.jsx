import React, { useContext, useEffect, useState } from "react";
import {
  Container,
  Text,
  Flex,
  Grid,
  GridItem,
  Tabs,
  TabList,
  TabPanel,
  Tab,
  TabPanels
} from "@chakra-ui/react";
import Itembox from "../Components/Itembox";
import { IoIosArrowRoundUp, IoIosArrowRoundDown } from "react-icons/io";
import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../contexts/authContext";
import apiClient from "../services/api-client";

function Dashboard() {
  const navigate = useNavigate();
  const data1 = {
    labels: ["Sun","Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
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
  const data2 = {
    labels: ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"],
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
  const data3 = {
    labels: ["2019","2020","2021","2022"],
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
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Added isLoading state
  const skels = [1, 2, 3, 4, 5];

  useEffect(() => {
    const data = { id: User.id };
    apiClient
      .post("/user/getuserdata", data)
      .then((res) => {
        console.log(res.data);
        setUser({
          ...User,
          balance: res.data.user.balance,
          debt: res.data.user.debt,
          exp: res.data.user.exp,
          status: true,
          gmail: res.data.gmail,
        });
      })
      .catch((err) => {
        console.log(err);
      });

    const edata = { userid: User.id };
    apiClient
      .post("/expense/gettopexpenses", edata)
      .then((res) => {
        console.log(res.data.recentTransactions);
        setItems(res.data.recentTransactions || []);
        setIsLoading(false); // Set isLoading to false when data is loaded
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);



  return (
    <Grid
      h={'80vh'}
      w={'83vw'}
      p={4}
      ml={5}
      bgColor={'purple.50'}
      mt={3}
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      gap={4}
      borderRadius={10}
    >
      <GridItem
        colSpan={2}
        bg="white"
        borderRadius={10}
        h={120}
        w={200}
        bgColor={"purple.300"}
        flexDirection={"column"}
        p={3}
        boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}
      >
        <Text fontWeight={"bold"} fontSize={20}>
          Your balance
        </Text>
        <Flex direction={"row"}>
          <Text>${User.balance}</Text>
          {User.balance > 0 ? <IoIosArrowRoundUp size={25} /> : <IoIosArrowRoundDown size={25} />}
        </Flex>
      </GridItem>
      <GridItem
        colSpan={2}
        bg="white"
        borderRadius={10}
        h={120}
        w={200}
        bgColor={"purple.200"}
        ml={-10}
        flexDirection={"column"}
        p={3}
        boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}
      >
        <Text fontWeight={"bold"} fontSize={20}>
          Your expense
        </Text>
        <Flex direction={"row"}>

          <Text>${User.exp}</Text>

          <IoIosArrowRoundDown size={25} />
        </Flex>
      </GridItem>
      <GridItem
        rowSpan={2}
        colSpan={1}
        bg="white"
        borderRadius={10}
        w={450}
        flexDirection={"column"}
        align={"center"}
        justifyContent={"center"}
        p={4}
        boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}
      >
        <Text mb={3} fontSize={24} fontWeight={'semibold'}>Recent Transactions</Text>

        {items.map((i) =>
          <Itembox
            title={i.name}
            price={i.amount}
            category={i.cat}
            key={i._id}
          />
        )}
      </GridItem>
      <GridItem
        colSpan={4}
        bg="white"
        p={5}
        borderRadius={10}
        h={300}
        w={500}
        boxShadow={"9px 9px 18px #e6e6e6,-9px -9px 18px #ffffff"}
      >
        <Tabs variant='soft-rounded' colorScheme='purple'>
          <TabList justifyContent={'space-evenly'}>
            <Tab>Weekly</Tab>
            <Tab>Monthly</Tab>
            <Tab>Yearly</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Bar data={data1} />
            </TabPanel>
            <TabPanel>
              <Bar data={data2} />
            </TabPanel>
            <TabPanel>
              <Bar data={data3} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
    </Grid>
  );
}

export default Dashboard;
