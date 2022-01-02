import React, { useState } from 'react'
import {
  Textarea
} from '@chakra-ui/react'

const ScriptArea = () => {
  const [script, setScript] = useState('')
  const handleScript = (event: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setScript(event.target.value)
  }

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
      onChange={handleScript}
    />
  )
}
export default ScriptArea
