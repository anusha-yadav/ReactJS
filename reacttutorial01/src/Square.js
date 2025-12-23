import React from 'react'

const Square = ({colorValue}) => {
  return (
    <section
        className='square'
        style={{backgroundColor: colorValue,display:'flex',justifyContent:'center'}}
    >
        <p>{colorValue ? colorValue : "EmptyValue"}</p>
      <h2>Square</h2>
    </section>
  )
}

export default Square
