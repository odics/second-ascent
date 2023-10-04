import React, { ReactNode } from "react";
import { Flex } from "@chakra-ui/react";

type ContainerProps = {
  children: ReactNode;
};

const Container = ({ children }: ContainerProps) => {
  return (
    <Flex
      width="100%"
      minH="100dvh"
      direction="column"
      align="center"
      className="container"
      pt="2rem"
    >
      {children}
    </Flex>
  );
};

export default Container;
