import { useEffect, useState, useMemo } from 'react';
import './App.css';

const App = () => {
  // const [arr, setArr] = useState(null);
  const max = 40, min = 0;
  const arr = useMemo(() => (new Array(10).fill(null).map((max, min) => {
    return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min))) + Math.ceil(min); //Максимум не включается, минимум включается
  })), [max, min]);

  console.log('render App', arr);
  return (
   <div> TEST </div>
  );
}

export default App;
