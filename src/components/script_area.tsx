import React from 'react'
import {
  Textarea
} from '@chakra-ui/react'

const scriptLineFormat = /([a-z]_[0-9]),\s?([\S]),\s?([\S]),\s?([R|L]),\s?([a-z]_[0-9])\n?/
interface ScriptAreaProps {
  setWrittenScript: (bool: boolean) => void
}
interface ScriptAreaState {
  script: string
}
export default class ScriptArea extends React.Component<ScriptAreaProps, ScriptAreaState> {
  constructor(props: ScriptAreaProps) {
    super(props)
    this.state = {
      script: ''
    }
    this.handleScript = this.handleScript.bind(this)
  }

  handleScript = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    this.setState({ script: event.target.value })
    this.props.setWrittenScript(event.target.value !== '')
  }

  render() {
    return (
      <Textarea
        resize='vertical'
        fontFamily='mono'
        borderWidth={2}
        w='100%'
        h='400px'
        px={2}
        mt={2}
        placeholder="Here is script for turing machine"
        size='lg'
        onChange={this.handleScript}
      />
    )
  }
}
