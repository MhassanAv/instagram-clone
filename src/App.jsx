import React, { useState } from "react";
import { Button, Center, Box, VStack, Text, Flex,useColorMode, Switch, color, Fade } from "@chakra-ui/react";
const App = () => {
  console.log("rerender");
  const { colorMode, toggleColorMode } = useColorMode()
  console.log(colorMode)
 
  return (
    <VStack alignItems="center" justifyContent="center" h="100vh" w="100%">
      <Text size={["xl", "lg", "md"]} fontWeight="extrabold">
        App {colorMode}
      </Text>
      <Switch
        size={'lg'}
        id='darkmode'
        colorScheme='teal'
        isChecked={colorMode==='dark' && true}
        onChange={toggleColorMode}
      /> 
    </VStack>
  );
};

export default App;
