import React, { useContext, useEffect, useState } from "react";
import { HStack, VStack } from "@chakra-ui/react";
import { Container, Text, Flex, Grid, GridItem } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from '../contexts/authContext';
import apiClient from "../services/api-client";

function Transactions() {
  const [expenseTitle, setTitle] = useState("");
  const [expensePrice, setPrice] = useState("");
  const [expenseCategory, setCategory] = useState("");
  const [expenseLocation, setLocation] = useState("");
  const [incomeTitle, setIncomeTitle] = useState("");
  const [formType, setFormType] = useState("");
  const [incomePrice, setIncomePrice] = useState("");
  const [incomeCategory, setIncomeCategory] = useState("");
  const [incomeLocation, setIncomeLocation] = useState("");

  const{User} = useContext(AuthContext)

  const {catCount, setCatCount} = useState({})

  useEffect(()=>{
    const data = {id:User.id}
    apiClient.post("/user/getusercats", data).then((res) => {
        console.log("got it");
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
  },[])

  // Event handlers to update state variables
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleLocationChange = (value) => {
    setLocation(value);
  };
  const handleIncomeTitleChange = (e) => {
    setIncomeTitle(e.target.value);
  };

  const handleIncomePriceChange = (e) => {
    setIncomePrice(e.target.value);
  };

  const handleIncomeCategoryChange = (e) => {
    setIncomeCategory(e.target.value);
  };

  const handleIncomeLocationChange = (value) => {
    setIncomeLocation(value);
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    if (formType === "expense") {
      console.log("Expense Title:", expenseTitle);
      console.log("Expense Price:", expensePrice);
      console.log("Expense Category:", expenseCategory);
      console.log("Expense Location:", expenseLocation);
      setTitle("");
      setPrice("");
      setCategory("");
      const data = { name: expenseTitle, cat: expenseCategory, mode: expenseLocation,amount:parseInt(expensePrice), userId:User.id };
      apiClient.post("/expense/create", data).then((res) => {
        console.log("expense added");
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
      setLocation("");
    } else if (formType === "income") {
      console.log("Income Title:", incomeTitle);
      console.log("Income Price:", incomePrice);
      console.log("Income Category:", incomeCategory);
      console.log("Income Location:", incomeLocation);
      setIncomeTitle("");
      setIncomePrice("");
      setIncomeCategory("");
      setIncomeLocation("");
      const data = { name: incomeTitle, cat: incomeCategory, mode: incomeLocation,amount:parseInt(incomePrice), userId:User.id };
      apiClient.post("/income/create", data).then((res) => {
        console.log("income added");
        console.log(res.data);
      }).catch((err) => {
        console.log(err);
      });
    }
  };

 
  return (
    <Flex direction="row" justify="space-between" ml="160" mt="8">
      <Flex direction="column" justify="space-between">
        <Text fontSize={"35px"}>Add Expenses</Text>
        <form onSubmit={(e) => handleSubmit(e, "expense")}>
          <Flex mt={6} direction="column">
            <Input
              placeholder="Title"
              mb={10}
              onChange={handleTitleChange}
              value={expenseTitle}
            ></Input>
            <Input
              placeholder="Price"
              onChange={handlePriceChange}
              value={expensePrice}
            ></Input>
            <Select
              placeholder="Category"
              mt={10}
              onChange={handleCategoryChange}
              value={expenseCategory}
            >
              <option value="Electricity">Electricity</option>
              <option value="Rent">Rent</option>
              <option value="Health">Health</option>
              <option value="Entertainment">Entertaintment</option>
              <option value="Food">Food</option>
            </Select>
            <HStack mt={10}>
              <Radio
                value="Home"
                mr={3}
                isChecked={expenseLocation === "Home"}
                onChange={() => handleLocationChange("Home")}
              >
                Home
              </Radio>
              <Radio
                value="Personal"
                isChecked={expenseLocation === "Personal"}
                onChange={() => handleLocationChange("Personal")}
              >
                Personal
              </Radio>
            </HStack>
            <Button
              mt={10}
              type="submit"
              bgColor={"purple.100"}
              onClick={() => setFormType("expense")}
            >
              Add
            </Button>
          </Flex>
        </form>
      </Flex>
      <Flex w={1} bgColor={'purple.100'} ml={150} borderRadius={10}></Flex>
      <Flex direction="column" justify="space-between" ml={40}>
        <Text fontSize={"35px"}>Add Income</Text>
        <form onSubmit={(e) => handleSubmit(e, "income")}>
          <Flex mt={6} direction="column">
            <Input
              placeholder="Title"
              mb={10}
              onChange={handleIncomeTitleChange}
              value={incomeTitle}
            ></Input>
            <Input
              placeholder="Price"
              onChange={handleIncomePriceChange}
              value={incomePrice}
            ></Input>
            <Select
              placeholder="Category"
              mt={10}
              onChange={handleIncomeCategoryChange}
              value={expenseCategory}
            >
              <option value="bonus">Bonus</option>
              <option value="salary">Salary</option>
            </Select> {/*malmc*/}
            <HStack mt={10}>
              <Radio
                value="Home"
                mr={3}
                isChecked={incomeLocation === "Home"}
                onChange={() => handleIncomeLocationChange("Home")}
              >
                Home
              </Radio>
              <Radio
                value="Personal"
                isChecked={incomeLocation === "Personal"}
                onChange={() => handleIncomeLocationChange("Personal")}
              >
                Personal
              </Radio>
            </HStack>
            <Button
              mt={10}
              type="submit"
              bgColor={"purple.100"}
              onClick={() => setFormType("income")}
            >
              Add
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
}

export default Transactions;
