import { useState, useEffect } from "react";
const App = () => {
  const [sort, setSort] = useState( new Array(10).fill(null).map(() => (Math.floor(Math.random() * 98) + 2)));

  useEffect(() => {
    function bubbleSortConcept1(arr) {
      let newArr = [];
      for (let j = arr.length - 1; j > 0; j--) {
        for (let i = 0; i < j; i++) {
          if (arr[i] > arr[i + 1]) {
            newArr[i] = arr[i + 1];
            newArr[i + 1] = arr[i];
          } else {
            newArr[i] = arr[i];
            newArr[i + 1] = arr[i + 1];
          }
        }
      }
    }
    console.log(bubbleSortConcept1(sort))
    // setSort(bubbleSortConcept1(sort));
  }, [sort]);

  console.log('render App',  sort);
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
