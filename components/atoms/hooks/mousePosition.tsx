import React from "react"

const useMousePosition = () => {

  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  React.useEffect(() => {
    const setFromEvent = e => setPosition({ x: e.clientX, y: e.clientY })

    window.addEventListener("mousemove", setFromEvent)

    return () => {
      window.removeEventListener("mousemove", setFromEvent)
    }
  }, [])

  return position
}

export default useMousePosition