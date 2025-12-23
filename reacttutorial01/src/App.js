import './App.css';
import Square from './Square';
import Input from './input';
import { useState } from 'react';

function App() {
  const [colorValue,setColorValue] = useState('')
  return (
    <div className="App">
      <Square
        colorValue={colorValue}/>
      <Input
        colorValue={colorValue}
        setColorValue={setColorValue}/>
    </div>
  );
}

export default App;
