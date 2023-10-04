import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./components/layout/Hero";
import Gear from "./components/layout/Gear";
import { Flex } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Hero />
      <Gear />
      <Flex w="1350px" minH="100dvh" background="#C1F7D5"></Flex>
    </>
  );
}
