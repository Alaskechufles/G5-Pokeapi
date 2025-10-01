import React from 'react'
import Child from './Child'

export default function Father(props) {
  return (
    <div>
        Father - {props.user.name}
        <Child user={props.user}/>
    </div>
  )
}
