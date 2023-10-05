import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex w="1350px" h="550px" className="hero">
      <Flex h="100%" pl="5rem" direction="column" justify="center" gap="2rem">
        <Flex direction="column">
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
        <Flex w="50%">
          <Text variant="heroByline" fontSize="lg">
            Make a sustainable impact on both young climbers and the environment
            by contributing your pre-loved climbing shoes. Help us reduce waste
            and give underprivileged children the opportunity to scale new
            heights.
          </Text>
        </Flex>
        <Flex gap="2rem">
          <Button variant="hero" alignSelf="flex-start">
            Get involved
          </Button>
          <Button variant="hero" alignSelf="flex-start">
            Browse our stuff
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Hero;
