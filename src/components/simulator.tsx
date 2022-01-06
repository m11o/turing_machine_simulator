import React from 'react'
import {
  Box,
  VStack,
  Flex
} from '@chakra-ui/react'

import ValueContainer from './simulator/value_container'

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
