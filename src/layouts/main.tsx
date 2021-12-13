import React from 'react'

import { Box } from '@chakra-ui/react'
import { Helmet } from 'react-helmet'

type props = {
  children?: React.ReactNode
}
const Main: React.FC<props> = ({ children }) => (
  <>
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="Simulate for Turing Machine" />
      <meta name="author" content="Masahito Osako" />
      <meta name="author" content="masahito1997" />
      <title>Turing Machine Simulator</title>
    </Helmet>

    <Box textAlign='center' fontSize='xl' w='100%'>
      {children}
    </Box>
  </>
)
export default Main
