import React from 'react'
import './MyStyle.css'

function Stylesheet(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Headline</h1>
    </div>
  )
}

export default Stylesheet
