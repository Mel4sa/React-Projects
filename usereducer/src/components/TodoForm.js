import { useState } from "react"

function TodoForm({ dispatch }) {
  const [text, setText] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === "") return
    dispatch({ type: "ADD", payload: text })
    setText("")
  }

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Yeni görev ekle..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">Ekle</button>
    </form>
  )
}

export default TodoForm