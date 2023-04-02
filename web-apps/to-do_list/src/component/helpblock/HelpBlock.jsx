import React from 'react'

function HelpBlock(props) {
  return (
    <div>
    <small className="form-text text-danger">{props.message}</small>
    </div>
  )
}

export default HelpBlock
