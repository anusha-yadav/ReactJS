import React from 'react'

const Input = ({colorValue, setColorValue}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name</label>
      <input 
        autoFocus
        type="text"
        placeholder='Add Color'
        required
        value = {colorValue}
        onChange={(e)=>setColorValue(e.target.value)}
        ></input>
    </form>
  )
}

export default Input
