import React, { useState } from "react";
import { Button, Center, Box, VStack, Text, Flex,useColorMode } from "@chakra-ui/react";
import { render } from "react-dom";
const App = () => {
  console.log("rerender");
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode)

  return (
    <VStack alignItems="center" justifyContent="center" h="100vh" w="100%">
      <Text size={["xl", "lg", "md"]} fontWeight="extrabold">
        App
      </Text>
      <Button
        onClick={toggleColorMode}
        variant="solid"
        borderRadius="25px"
        size={["5xl", "lg", "sm"]}
        colorScheme={"teal"}
      >
        toggle
      </Button>
    </VStack>
  );
};

export default App;
