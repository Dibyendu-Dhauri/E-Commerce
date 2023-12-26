import React from 'react'
import "./Popular.scss"
export default function Popular() {
  return (
    <div className='popularContainer'>
      <h1>{"Popular suggestions"}</h1>
      <div className='suggestions'>
        <span>{"men's clothing"}</span>
        <span>{"women's clothing"}</span>
        <span>{"jewelery"}</span>
        <span>{"electronics"}</span>
      </div>
    </div>
  )
}
