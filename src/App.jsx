import React,{useState} from 'react'
import { Button,Center,Box, VStack,Text, Flex } from '@chakra-ui/react';
const App = () => {
  console.log('rerender');


  const handler = ()=>{
    if(document.documentElement.getAttribute('data-theme')==='dark')
    document.documentElement.setAttribute('data-theme','light');
    else{
      document.documentElement.setAttribute('data-theme','dark');
    }
  }



  return (
    <VStack alignItems='center' justifyContent='center' h='100vh' w='100%'>
      <Text size={['xl','lg','md']} fontWeight='extrabold'>App</Text>
      <Button onClick={handler} variant='solid' borderRadius='25px' size={['5xl','lg','sm']} colorScheme={'teal'}>toggle</Button>
      </VStack>
      
  )
}

export default App