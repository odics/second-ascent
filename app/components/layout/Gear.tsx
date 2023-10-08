import React from "react";
import { Flex, Button, Text, Badge } from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook, AiTwotoneMail } from "react-icons/ai";
import { GiSonicShoes } from "react-icons/Gi";

const Gear = () => {
  return (
    <Flex
      background="#354463"
      w="1450px"
      className="gear"
      align="center"
      px="6rem"
      py="1.5rem"
      justify="center"
    >
      <Flex gap="9rem">
        <Flex
          align="center"
          border="1px"
          borderColor="white"
          borderRadius="5px"
          px="1rem"
          gap="1rem"
        >
          <GiSonicShoes size={60} />
          {/* <Button variant="gearNav" w="135px" h="30"> */}
          Shoes
          {/* </Button> */}
        </Flex>
        <Flex
          align="center"
          border="1px"
          borderColor="white"
          px="1rem"
          gap="1rem"
          borderRadius="5px"
        >
          <GiSonicShoes size={60} />
          {/* <Button variant="gearNav" w="135px" h="30"> */}
          Harnesses
          {/* </Button> */}
        </Flex>
        <Flex
          align="center"
          border="1px"
          borderColor="white"
          px="1rem"
          gap="1rem"
          borderRadius="5px"
        >
          <GiSonicShoes size={60} />
          {/* <Button variant="gearNav" w="135px" h="30"> */}
          Chalkbags
          {/* </Button> */}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Gear;
