import { useState, useEffect } from "react";
const App = () => {
  const [sort, setSort] = useState(null);

  useEffect(() => {
    let arr =  new Array(10).fill(null).map(() => (Math.floor(Math.random() * 98) + 2));
    console.log('До сортировки: ', arr);
    function bubbleSortConcept1(arr) {
      for (let j = arr.length - 1; j > 0; j--) {
        // каждый раз цикл соершает на 1 итерацию меньше, так как число j уменьшается 
        for (let i = 0; i < j; i++) {
          if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    }
    //! Правильное решение arr.sort((a, b) => b - a);
    //! reduce
    //! map
    bubbleSortConcept1(arr)
    setSort(arr);
    console.log('После сортировки: ', arr);
  }, []);

  if (!sort) return null;
  return (
   <div>
      { 
        sort.map((item, i) => {
          return <div key={i}>{item}</div>
        })
      }
    </div>
  );
}

export default App;
