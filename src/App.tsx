import * as React from "react"
import {
  ChakraProvider,
  Box,
  Heading,
  Textarea,
  VStack,
  ButtonGroup,
  Button
} from "@chakra-ui/react"

import { Font } from './lib/font'
import { theme } from './lib/theme'
import Main from './layouts/main'
import Simulator from "./components/simulator"

export const App: React.FC = () => (
  <ChakraProvider theme={theme}>
    <Font />
    <Main>
      <VStack pt='100px' pb={10} px={{ base: 4, md: 8 }} w='100%'>
        <Heading fontFamily='heading' as='h1' fontSize='4xl' mb={10}>Turing Machine Simulator</Heading>
        <Simulator />
        <ButtonGroup spacing={{ base: 2, md: 4 }} w='100%' justifyContent='center'>
          <Button colorScheme='green' p={4} mr='-px' w={{ base: 'sm', md: 'sm' }}>Run</Button>
          <Button w={{ base: 'sm', md: 'md' }} colorScheme='red'>Step</Button>
        </ButtonGroup>
        <Box mt={4} d='block' w='100%' px={{ base: 0, md: '15%' }}>
          <Textarea resize='vertical' fontFamily='mono' borderWidth={2} w='100%' h='400px' px={2} mt={4} placeholder="Here is script for turing machine" size='lg' />
        </Box>
      </VStack>
    </Main>
  </ChakraProvider>
)
