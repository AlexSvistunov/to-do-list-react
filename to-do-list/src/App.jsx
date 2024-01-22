import { useState } from "react";
import "./App.css";
import Item from "./components/Item/Item";

function App() {
  let [inputValue, setInputValue] = useState("");
  let [list, setList] = useState([]);

  function setValue(value) {
    setInputValue(value);
  }

  function deleteItem(index) {
    list.splice(index, 1)
    setList(prev => [...prev])
  }

  function editItem(index) {
  }

  function getItemDone(item) {
    const liItem = item.closest('li')
    liItem.className = 'todo-item done'

    // проблема с удалением верхнего элемента
}

  function submitForm(e) {
    e.preventDefault();
    const value = inputValue;
    if (value) {
      setList((prev) => [...prev, value]);
    }

    setInputValue("");
  }

  return (
    <>
      <div className="wrapper">
        <form onSubmit={submitForm}>
          <input
            onChange={(e) => setValue(e.target.value)}
            value={inputValue}
            className="input"
            type="text"
          />
          <button className="button">Добавить Дело</button>
        </form>
      </div>
      <ul className="todo-list">
        {list.length ? (
          list.map((element, index) => <Item key={index} text={element} index={index} delete={deleteItem} edit={editItem} done={getItemDone}></Item>)
        ) : (
          <p>Нет дел</p>
        )}
      </ul>
    </>
  );
}

export default App;
