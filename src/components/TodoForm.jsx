import { useState } from "react"

export default function TodoForm({ addTodoTask }) {
    const [inputTaskValue, setInputTaskValue] = useState('')

    function handleAddTodoTask() {
        addTodoTask(inputTaskValue)
        setInputTaskValue('')
    }

    function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputTaskValue}
                    className="todo_input"
                    onChange={(e) => setInputTaskValue(e.target.value)}
                    placeholder="Create a new todo..."
                />
                <button type="submit" className="submitBtn" onClick={handleAddTodoTask}></button>
            </form>
        </>
    )
}