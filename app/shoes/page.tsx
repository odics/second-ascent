import React from "react";
import { Flex, Grid, GridItem, Select, Text } from "@chakra-ui/react";
import Shoes from "../components/Shoes";
import { AiOutlineSearch } from "react-icons/ai";

const page = () => {
  type Shoe = {
    gender: string;
    size: string;
    brand: string;
    condition: string;
  };

  const shoeData: Shoe[] = [
    {
      gender: "Mens",
      size: "US 10",
      brand: "Scarpa",
      condition: "Fair",
    },
    {
      gender: "Mens",
      size: "US 9",
      brand: "La Sportiva",
      condition: "Fair",
    },
    {
      gender: "Womens",
      size: "US 7",
      brand: "MadRock",
      condition: "Fair",
    },
    {
      gender: "Womens",
      size: "US 8",
      brand: "5.11",
      condition: "Fair",
    },
    {
      gender: "Womens",
      size: "US 8",
      brand: "5.11",
      condition: "Fair",
    },
  ];

  return (
    <Flex
      w="1350px"
      minH="100dvh"
      background="white"
      px="2rem"
      direction="column"
      gap="1rem"
    >
      <Flex
        w="100%"
        background="#354463"
        padding=".5rem"
        align="center"
        gap="1rem"
      >
        <Flex w="100%">
          <Text fontWeight="semibold">Climbing shoes</Text>
        </Flex>
        <Select
          size="sm"
          width="200px"
          bg="white"
          borderColor="#354463"
          color="#354463"
        >
          <option value="option1">All</option>
          <option value="option1">Male</option>
          <option value="option2">Female</option>
          <option value="option2">Unisex</option>
        </Select>
        <Select
          placeholder="Size"
          size="sm"
          width="200px"
          bg="white"
          borderColor="#354463"
          color="#354463"
        />
      </Flex>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        {shoeData.map((shoe, index) => {
          return (
            <GridItem>
              <Shoes key={index} {...shoe} />
            </GridItem>
          );
        })}
      </Grid>
    </Flex>
  );
};

export default page;
