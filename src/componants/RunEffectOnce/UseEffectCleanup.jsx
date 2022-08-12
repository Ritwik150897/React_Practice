import React, {useState} from 'react'
import RunEffectOnce from './RunEffectOnce'

function UseEffectCleanup() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
        <button onClick={() => setDisplay(!display)}>Toggle Display</button>
        {display && <RunEffectOnce/>}
    </div>
  )
}

export default UseEffectCleanup
