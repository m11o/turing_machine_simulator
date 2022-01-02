import React, { useState } from "react"
import {
  ChakraProvider,
  Box,
  Heading,
  Textarea,
  VStack,
  ButtonGroup,
  Button,
  Input
} from "@chakra-ui/react"

import { Font } from './lib/font'
import { theme } from './lib/theme'
import Main from './layouts/main'
import Simulator from "./components/simulator"
import ScriptArea from "./components/script_area"

export const App: React.FC = () => {
  const [initValue, setInitValue] = useState('')
  const [script, setScript] = useState('')
  const handleInitValue = (event: React.ChangeEvent<HTMLInputElement>) => setInitValue(event.target.value)
  const handleScript = (event: React.ChangeEvent<HTMLTextAreaElement>) => setScript(event.target.value)

  return (
    <ChakraProvider theme={theme}>
      <Font />
      <Main>
        <VStack pt='100px' pb={10} px={{ base: 4, md: 8 }} w='100%'>
          <Heading fontFamily='heading' as='h1' fontSize='4xl' mb={10}>Turing Machine Simulator</Heading>
          <Simulator initValue={initValue} />
          <ButtonGroup spacing={{ base: 2, md: 4 }} w='100%' justifyContent='center' isDisabled={initValue === '' || script === ''}>
            <Button colorScheme='green' p={4} mr='-px' w={{ base: 'sm', md: 'sm' }}>Run</Button>
            <Button w={{ base: 'sm', md: 'md' }} colorScheme='red'>Step</Button>
          </ButtonGroup>
          <Box mt={4} d='block' w='100%' px={{ base: 0, md: '15%' }}>
            <Input placeholder='initial value' mt={4} borderWidth={2} w='100%' onChange={handleInitValue} fontFamily='mono' />
            <ScriptArea />
          </Box>
        </VStack>
      </Main>
    </ChakraProvider>
  )
}
