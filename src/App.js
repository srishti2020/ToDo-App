import './App.css';
import Item from './components/item/item.component';
import { useState } from 'react';
import { useEffect } from 'react';

const getLocalStorageItems = () => {
  let list = localStorage.getItem("lists")

  console.log(list)
  if (list) {
    return JSON.parse(localStorage.getItem('lists'))
  }
  else {
    return []
  }

}
function App() {
  const [item, setItem] = useState("");
  const [itemsArray, setItemsArray] = useState(getLocalStorageItems)
  const addItems = () => {
    setItemsArray([...itemsArray, item])
    setItem("")
  }

  useEffect(() => {
    console.log(itemsArray)
    localStorage.setItem("lists", JSON.stringify(itemsArray))
  }, [itemsArray]);

  return (
    <>
      <h1>ToDo List</h1>
      <input type="text" value={item} onChange={(e) => { setItem(e.target.value) }} />
      <i className="fa fa-plus" aria-hidden="true" onClick={addItems}></i>
      {
        itemsArray.map((element, id) => {
          return (
            <Item value={element} key={id} id={id} itemsArray={itemsArray} setItemsArray={setItemsArray} />
          )
        })
      }
    </>

  );
}

export default App;
