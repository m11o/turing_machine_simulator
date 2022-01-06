import React from 'react'
import { Text } from '@chakra-ui/react'

interface ValueContainerProps {
  value: string,
  currentBox?: boolean
}
interface ValueContainerState {
  value: string,
  currentBox: boolean
}

export default class ValueContainer extends React.Component<ValueContainerProps, ValueContainerState> {
  constructor(props: ValueContainerProps) {
    super(props)
    this.state = {
      value: props.value,
      currentBox: props.currentBox || false
    }
  }

  render() {
    return (
      <Text
        py={4}
        px={this.state.value === '' ? '30px' : 6}
        bgColor={this.state.currentBox ? 'green.400' : ''}
        border='1px'
        borderColor='gray.200'
        h={16}
        w={16}
      >
        {this.state.value ? this.state.value : ''}
      </Text>
    )
  }
}
