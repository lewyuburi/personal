import React from 'react'
import { useInterval } from 'react-use'

interface Props {
  strings: string[]
}

const Rotator = (props: Props) => {
  const [greetingIndex, setGreetingIndex] = React.useState(0)

  useInterval(() => {
    let next = greetingIndex + 1

    if (greetingIndex >= props.strings.length - 1) {
      next = 0
    }

    setGreetingIndex(next)
  }, 1000)

  return (
    <React.Fragment>
      {props.strings[greetingIndex]}
    </React.Fragment>
  )
}

export default React.memo(Rotator)