import React from 'react'

export function HelpBlock(props) {
  return (
    <div>
    <small className="form-text text-danger">{props.message}</small>
    </div>
  )
}

export function ErrorBlock(props) {
  return (
      <div class="alert alert-danger" role="alert">
          {props.message}
      </div>
  )
}
