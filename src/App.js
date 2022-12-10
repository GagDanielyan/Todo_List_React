import { useEffect, useState } from "react";
import TodoList from "./components/TodoList";
import './App.css';
import './components/mobileStyle/Mobile.css'
import TodoForm from "./components/TodoForm";
import Completed from "./components/Completed";
import Content from "./components/Content";
import Modal from "./components/Modal/Modal";

const getFromLocalStorage = () => {
  let todos = localStorage.getItem("todos");
  if(todos) {
    return (todos = JSON.parse(localStorage.getItem("todos")));
  } else {
    return [];
  }
}

function App() {

  const [todos, setTodos] = useState(getFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  // changing the isCompleted key in todoItem
  const change = (todo) => {
    const finded = todos.find((t) => t.id === todo.id)
    finded.isCompleted = !finded.isCompleted;
    return setTodos([...todos]);
  }

  // for adding new items
  const onAdd = (text) => {
    if (text && text.length <= 54) {
      if (text.trim()) {
          return setTodos([
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          },
          ...todos,
        ]);
      }
    }
  }

  // counting for complete or not complete
  const [count, setCount] = useState(0)
  const completed = () => {
    if (count == 0) {
      setCount(1);
    } else if (count == 1) {
      setCount(0);
    }
  }

  // modal showing and hiding
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };


  // Deleting
  const [newtodo, setNewtodo] = useState("");
  const removeTodo = (todo) => {
    setNewtodo(todo);
  }

  const deleteTodo = (todo) => {
    if (todo) {
      setTodos(todos.filter((t) => t.id !== newtodo.id))
    }
    toggleModal();
  }


  return (
    <div className="App">
      <Completed completed={completed} todos={todos}/>

      <TodoForm onAdd={onAdd} />

      {
        !todos.length ? 
        <Content /> 
        :
        <TodoList
        todos={todos}
        count={count}
        change={change}
        toggleModal={toggleModal}
        removeTodo={removeTodo}
      />
      }

      <Modal
        modal={modal}
        toggleModal={toggleModal}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
