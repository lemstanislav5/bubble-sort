import { useState, useEffect } from "react";
const App = () => {
  const [sort, setSort] = useState( new Array(10).fill(null).map(() => (Math.floor(Math.random() * 98) + 2)));

  useEffect(() => {
    let arr = sort;
    console.log(arr)
    function bubbleSortConcept1(arr) {
      for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (arr[i] > arr[i + 1]) {
            let temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
          }
        }
      }
    }
    console.log(bubbleSortConcept1(arr))
    setSort(bubbleSortConcept1(arr));
  }, [sort]);

  console.log('render App',  sort);

  if (!sort) return null;
  return (
   <div>
      { sort.map((item, i) => {
        return <div key={i}>{item}</div>
      })
      }
    </div>
  );
}

export default App;
