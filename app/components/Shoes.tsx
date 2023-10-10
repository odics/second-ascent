"use client";

import React, { useState } from "react";
import { Flex, Image, Text, Button } from "@chakra-ui/react";

type Shoes = {
  gender: string;
  size: string;
  brand: string;
  condition: string;
};

const Shoes = (props: Shoes) => {
  const [imgSource, setImgSource] = useState<string>(
    "https://www.evolvsports.com/media/image/d4/5c/74/df8cb334-b7e0-4684-b023-9a7352b249c7_evolv_600x600.jpg"
  );

  const hoverImg =
    "https://www.evolvsports.com/media/image/bf/84/77/6e81478f-e5a5-414c-8a65-e8933c386f7d_evolv_600x600@2x.jpg";

  const regImg =
    "https://www.evolvsports.com/media/image/d4/5c/74/df8cb334-b7e0-4684-b023-9a7352b249c7_evolv_600x600.jpg";

  return (
    <Flex
      border="1px"
      borderColor="#354463"
      direction="column"
      borderRadius="md"
    >
      <Image
        src={imgSource}
        borderRadius="md"
        onMouseEnter={() => {
          setImgSource(hoverImg);
        }}
        onMouseLeave={() => {
          setImgSource(regImg);
        }}
      />
      <Flex
        backgroundColor="white"
        direction="column"
        padding=".5rem"
        borderRadius="md"
      >
        <Flex w="100%" justify="space-between">
          <Text color="#354463" fontSize="sm" fontWeight="semibold">
            {props.brand}
          </Text>
        </Flex>
        <Flex w="100%">
          <Text color="#354463" fontSize="sm">
            {props.gender} {props.size}
          </Text>
        </Flex>
        <Button variant="primary" mt="1rem">
          Request
        </Button>
      </Flex>
    </Flex>
  );
};

export default Shoes;
