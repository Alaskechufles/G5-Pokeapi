import React from 'react'
import Mother from './Mother'

export default function Child(props) {
  return (
    <div>
        <p>Child - {props.user.name}</p>
        <Mother></Mother>
    </div>
  )
}
