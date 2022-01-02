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
      px={value === '' ? '30px' : 6}
      bgColor={currentBox ? 'green.400' : ''}
      border='1px'
      borderColor='gray.200'
      h={16}
      w={16}
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
    <Flex direction='row' justifyContent='center' id='simulator-container'>
      {values.length ? (
        values.map((value, index) => <ValueContainer value={value} key={index} />)
      ) : ''}
    </Flex>
  )
}

type SimulatorProps = {
  initValue: string
}
const Simulator: React.FC<SimulatorProps> = ({ initValue }) => {
  const refreshContainer = (): void => {
    const simulatorContainerDom = document.getElementById('sumulator-container')
    if (simulatorContainerDom) simulatorContainerDom.remove()
  }

  const buildValues = (initValue: string): string[] => {
    const defaultValuesSize = 6
    refreshContainer()
    if (!initValue.length) return Array(defaultValuesSize).fill('')

    let stringList: string[] = Array.from(initValue)
    stringList.push('')
    return stringList
  }

  return (
    <Box w='100%' overflowX='auto'>
      <VStack mb={10}>
        <ValueContainerList values={buildValues(initValue)} />
      </VStack>
    </Box>
  )
}
export default Simulator
