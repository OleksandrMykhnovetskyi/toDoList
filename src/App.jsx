import { useEffect, useState } from 'react'
import './App.css'
import Todos from './Todos'
import {Context} from "./context"

function App() {
const [todos, setTodos] = useState(()=> JSON.parse(localStorage.getItem("todos")) || [])

const [todoInput, setTodoInput] = useState("")

useEffect(()=>{
  localStorage.setItem("todos", JSON.stringify(todos))
}, [todos])

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
  setTodos(todos.map(todo=>{
    if(todo.id === id){
      todo.checked = !todo.checked
    }
    return todo
  }))

}

const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id != id))
}


  return (
    <Context.Provider value={
      { deleteTodo, toggleCheck }
    }>
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
          <Todos todos={todos} />
      </div>
    </Context.Provider>
  )
}

export default App




// const toggleCheck = id => {     
//   setTodos(todos.map(todo => {
//     if (todo.id === id) {
//       todo.checked = !todo.checked
//       }
//     return todo
//   }))
// }


// const deleteTodo = id => {
//   setTodos(todos.filter(todo => todo.id !== id))
// }