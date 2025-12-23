import React from 'react'
import { useState } from 'react';
import ItemList from './ItemList';


function Content({items,handleCheck,handleDelete}) {
  const [name,setName] = useState('Dave');
  const [count,setCount] = useState(0);

  // Click Events
  const handleNameChanges = () =>{
    const names = ['Bob','Kevin','Dave','Anusha'];
    const int = Math.floor(Math.random() * 4);
    setName(names[int]);
  }

  const handleClick = () => {
    setCount(count+1)
    setCount(count+1)
    console.log(count)
  }

  const handleClick2 = (name) => {
    setCount(count+1)
    console.log(count);
    console.log(`${name} was clicked`)
  }

  const handleClick3 = (e) => {
    console.log(e.target.innerText)
    console.log(count);
  }
  


  return (
    <>
      {/* <p onDoubleClick={handleClick}>
        Hello {name};
      </p>
      <p>
        Hello {name} !!
      </p>
        <button onClick={handleNameChanges}>Change Name</button>
        <button onClick={handleClick}>Click it {count}</button>
        <button onClick={()=>handleClick2('Dave')}>Click it</button>
        <button onClick={(e)=>handleClick3(e)}>Click it</button> */}
        {/* List & Keys Example */}
      {items.length ? (
        <ItemList
          items = {items}
          handleCheck = {handleCheck}
          handleDelete = {handleDelete}
          ></ItemList>
      ) : (
        <p style={{marginTop:`2rem`}}>Your list is empty</p>
      )
    }
    </>
  )
}

export default Content
