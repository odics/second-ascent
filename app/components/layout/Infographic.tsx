import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { BiSolidDonateHeart } from "react-icons/bi";
import { RiCommunityFill, RiRecycleFill } from "react-icons/ri";
import { FaPeopleGroup } from "react-icons/fa6";

const Infographic = () => {
  return (
    <Flex w="100%" justify="space-around" pt="4rem" gap="2rem" px="2rem">
      <Flex
        h="400px"
        w="100%"
        align="center"
        backgroundColor="#354463"
        borderRadius="md"
        direction="column"
        gap="2rem"
        pt="2rem"
        pb="2rem"
      >
        <RiRecycleFill size={120} />
        <Text fontSize="3xl" fontWeight="bold">
          Environment
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore
          ipsa aliquid quidem perspiciatis quasi culpa sequi perferendis maxime
          unde?
        </Text>
      </Flex>
      <Flex
        h="400px"
        w="100%"
        align="center"
        backgroundColor="#354463"
        borderRadius="md"
        direction="column"
        gap="2rem"
        pt="2rem"
        pb="2rem"
      >
        <BiSolidDonateHeart size={120} />
        <Text fontSize="3xl" fontWeight="bold">
          Empower
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore
          ipsa aliquid quidem perspiciatis quasi culpa sequi perferendis maxime
          unde?
        </Text>
      </Flex>
      <Flex
        h="400px"
        w="100%"
        align="center"
        backgroundColor="#354463"
        borderRadius="md"
        direction="column"
        gap="2rem"
        pt="2rem"
        pb="2rem"
      >
        <RiCommunityFill size={120} />
        <Text fontSize="3xl" fontWeight="bold">
          Community
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore
          ipsa aliquid quidem perspiciatis quasi culpa sequi perferendis maxime
          unde?
        </Text>
      </Flex>
      <Flex
        h="400px"
        w="100%"
        align="center"
        backgroundColor="#354463"
        borderRadius="md"
        direction="column"
        gap="2rem"
        pt="2rem"
        pb="2rem"
      >
        <FaPeopleGroup size={120} />
        <Text fontSize="3xl" fontWeight="bold">
          Climbers
        </Text>
        <Text textAlign="center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum labore
          ipsa aliquid quidem perspiciatis quasi culpa sequi perferendis maxime
          unde?
        </Text>
      </Flex>
    </Flex>
  );
};

export default Infographic;
