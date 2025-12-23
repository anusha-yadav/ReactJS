import Header from './Header';
import './App.css';
import Content  from './Content';
import Footer from './footer'
import { useState } from 'react';

function App() {
  const [color,setColor] = useState('Red');  
  const changeColor = () => {
    setColor('Blue')
    console.log(color);
  }
  return (
    <>
    <h1>My favourite color is {color}!</h1>
    <button onClick={changeColor}>Blue</button>
    </>
  );
}

export default App;
