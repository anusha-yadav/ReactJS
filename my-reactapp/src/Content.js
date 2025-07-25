import { useState } from 'react'

const Content = () => {
    const [user , setName] = useState('Anusha')
    const [count, setCount] = useState(0)
    const name = () => {
        const names = ['Bob','Kevin','Dave'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]);
      }


    const handleClick = () => {
        setCount(count + 1)
        console.log(count)
    }

    const handleClick2 = (name) => {
        console.log(`Hello, ${name}!`)
    }

    const handleClick3 = (e) => {
        console.log(e.target)
    }

  return (
    <main>
        <p onDoubleClick = {handleClick}>
            Hello {user}
        </p>
        <button onClick={name}> Change Name</button>
        <button onClick={() => handleClick2(name())}>Click It 2</button>
        <button onClick={handleClick}>Click It 2</button>
        <button onClick={(e) => handleClick3(e)}>Click It 2</button>
    </main>
  )
}

export default Content
