import React from 'react'
import {
  Box,
  VStack,
  Text,
  Flex
} from '@chakra-ui/react'

type ValueContainerProps = {
  value: string,
  currentBox?: boolean
}
const ValueContainer: React.FC<ValueContainerProps> = ({ value, currentBox=false }) => {
  return (
    <Text
      py={4}
      px={6}
      bgColor={currentBox ? 'green.400' : ''}
      border='1px'
      borderColor='gray.200'
    >
      {value ? value : ''}
    </Text>
  )
}

type ValueContainerListProps = {
  values: string[]
}
const ValueContainerList: React.FC<ValueContainerListProps> = ({ values }) => {
  return (
    <Flex direction='row' justifyContent='center'>
      {values.length ? (
        values.map(value => <ValueContainer value={value} key={value} />)
      ) : ''}
    </Flex>
  )
}

const Simulator = () => {
  return (
    <Box>
      <VStack mb={10}>
        <ValueContainerList values={['1', '7', '3', '4']} />
      </VStack>
    </Box>
  )
}
export default Simulator
