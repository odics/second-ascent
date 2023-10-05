import React from "react";
import { Flex, Button, Text, Badge } from "@chakra-ui/react";
import { AiFillInstagram, AiFillFacebook, AiTwotoneMail } from "react-icons/ai";

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
        <Button variant="gearNav" w="135px">
          Shoes
        </Button>
        <Button variant="gearNav" w="135px" className="badgedBtn">
          Harnesses
          <Badge className="badge" variant="gearBadge">
            Coming soon
          </Badge>
        </Button>
        <Button variant="gearNav" w="135px">
          Chalkbags
          <Badge className="badge" variant="gearBadge">
            Coming soon
          </Badge>
        </Button>
      </Flex>
    </Flex>
  );
};

export default Gear;
