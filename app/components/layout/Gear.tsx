import React from "react";
import { Flex, Button } from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook, AiTwotoneMail } from "react-icons/ai";

const Gear = () => {
  return (
    <Flex
      background="#354463"
      w="1450px"
      h="70px"
      className="gear"
      align="center"
      px="6rem"
      justify="space-between"
    >
      <Flex>Looking for something?</Flex>
      <Flex gap="3rem">
        <Button variant="gearNav">Shoes</Button>
        <Button variant="gearNav">Harnesses</Button>
        <Button variant="gearNav">Chalkbags</Button>
      </Flex>
      <Flex>
        <AiFillInstagram size={40} />
        <AiFillFacebook size={40} />
        <AiTwotoneMail size={40} />
      </Flex>
    </Flex>
  );
};

export default Gear;
