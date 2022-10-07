import { useState } from 'react'
import './App.css'
import Todos from './Todos'

function App() {
const [todos, setTodos] = useState([
  {
    id: 1,
    title: "first-todo",
    checked: false
  },
  {
    id: 2,
    title: "second-todo",
    checked: false
  }
])

const [todoInput, setTodoInput] = useState("")

const titleChange = (event) => {
  setTodoInput(oldTitle => {
    return (event.target.value)
  })
}

const addToDo = (event) => {
  const enterCode = 13
    if(event.keyCode === enterCode){
      setTodos([
          ...todos,
          {
            id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
            title: todoInput,
            checked: false
          }
        ]
      )
    }
}

const addNewToDo = (event) => {
  event.preventDefault()
  setTodos(oldTodos => {
    return ([
      ...oldTodos,
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        title: todoInput,
        checked: false
      }
    ])
  })
  setTodoInput(" ")
}


const toggleCheck = (id) => {
  setTodos(todos.map((el) => {
    if (el.id === id) {
      return {
        ...el,
        checked: !el.checked,
      };
    }

    return el;
  }));
};


const deleteTodo = (todoId) => {
  setTodos(oldTodos => oldTodos.filter(todo => todo.id !== todoId))
}

  return (
    <div className="wrapper">
        <h1>ToDo list:</h1>
        <form className='form-element'>
          <input 
              className='input-field' 
              type="text" 
              placeholder='write new todo'
              value = {todoInput}
              onChange = {titleChange}
              onKeyDown={() => addToDo}/>
          <button 
              className='add-button' 
              onClick={addNewToDo}>
                Add todo</button>
        </form>
        <Todos 
            todos={todos} 
            deleteTodo={deleteTodo} 
            toggleCheck = {toggleCheck}/>
    </div>
  )
}

export default App
