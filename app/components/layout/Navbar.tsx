import React from "react";
import { Flex, Text, Button, Link } from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Flex w="1350px" h="70px" background="white" align="center" px="2rem">
      <Flex w="100%" align="center" justify="space-between">
        <Text fontSize="2xl" textColor="#354463">
          SECONDASCENT
        </Text>
        <Flex gap="2rem">
          <Link href="#" variant="navLink">
            About us
          </Link>
          <Link href="#" variant="navLink">
            Contact
          </Link>
          <Link href="#" variant="navLink">
            FAQ
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
