import React, {useState, useEffect} from 'react'

function RunEffectOnce() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log("Mouse Event")
        setX(e.clientX)
        setY(e.clientY)
    }

    useEffect(() => {
        console.log("useEffect Called")
        window.addEventListener('mouseover', logMousePosition)

        return () => {
          console.log("Unmounting")
          window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])

    return (
    <div>
      Hooks X - {x}, Y - {y}
    </div>
  )
}

export default RunEffectOnce
