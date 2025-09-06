import { useState } from "react"

function TodoList({ todos, dispatch }) {
  const [editText, setEditText] = useState("")

  return (
    <ul className="todo-list">
      {todos.map(todo => (
        <li key={todo.id} className="todo-item">
          {todo.isEditing ? (
            <>
              <input
                type="text"
                defaultValue={todo.text}
                onChange={(e) => setEditText(e.target.value)}
              />
              <button
                onClick={() => dispatch({ type: "SAVE", payload: { id: todo.id, text: editText } })}
              >
                Kaydet
              </button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <div className="buttons">
                <button onClick={() => dispatch({ type: "EDIT", payload: todo.id })}>Düzenle</button>
                <button onClick={() => dispatch({ type: "REMOVE", payload: todo.id })}>Sil</button>
              </div>
            </>
          )}
        </li>
      ))}
    </ul>
  )
}

export default TodoList