import React from "react";
import { Flex, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex w="1350px" h="500px" className="hero">
      <Flex h="100%" pl="5rem" direction="column" justify="center">
        <Text variant="hero">
          Elevate{" "}
          <Text as="span" textColor="white">
            young climbers
          </Text>
        </Text>
        <Text variant="hero">
          Reduce{" "}
          <Text as="span" textColor="white">
            waste
          </Text>
        </Text>
        <Text variant="hero">
          Donate{" "}
          <Text as="span" textColor="white">
            climbing shoes
          </Text>
        </Text>
      </Flex>
    </Flex>
  );
};

export default Hero;
