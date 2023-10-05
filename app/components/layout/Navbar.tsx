import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="1350px" h="70px" background="white" align="center" px="2rem">
      <Flex w="100%" align="center" justify="space-between">
        <Text fontSize="2xl" textColor="#354463">
          SECONDASCENT
        </Text>
        <Flex gap="1rem">
          <Button variant="navLink">About us</Button>
          <Button variant="navLink">Contact</Button>
          <Button variant="navLink">FAQ</Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
