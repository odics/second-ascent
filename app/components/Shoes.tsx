import React from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

type Shoes = {
  gender: string;
  size: string;
  brand: string;
  condition: string;
};

const Shoes = (props: Shoes) => {
  return (
    <Flex border="1px" borderColor="#354463" direction="column">
      <Image src="https://www.evolvsports.com/media/image/d4/5c/74/df8cb334-b7e0-4684-b023-9a7352b249c7_evolv_600x600.jpg" />
      <Flex backgroundColor="white" direction="column" padding=".5rem">
        <Flex w="100%" justify="space-between">
          <Text fontWeight="semibold" color="#354463">
            Gender
          </Text>
          <Text color="#354463">{props.gender}</Text>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Text fontWeight="semibold" color="#354463">
            Size
          </Text>
          <Text color="#354463">{props.size}</Text>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Text fontWeight="semibold" color="#354463">
            Brand
          </Text>
          <Text color="#354463">{props.brand}</Text>
        </Flex>
        <Flex w="100%" justify="space-between">
          <Text fontWeight="semibold" color="#354463">
            Condition
          </Text>
          <Text color="#354463">{props.condition}</Text>
        </Flex>
        <Button variant="primary" mt="1rem">
          Request
        </Button>
      </Flex>
    </Flex>
  );
};

export default Shoes;
