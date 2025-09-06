import { useReducer } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import "./App.css"

const initialState = []

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.payload, isEditing: false }]
    case "REMOVE":
      return state.filter(todo => todo.id !== action.payload)
    case "EDIT":
      return state.map(todo =>
        todo.id === action.payload ? { ...todo, isEditing: true } : todo
      )
    case "SAVE":
      return state.map(todo =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.text, isEditing: false }
          : todo
      )
    default:
      return state
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="app">
      <h1>Görev Listesi</h1>
      <TodoForm dispatch={dispatch} />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  )
}

export default App