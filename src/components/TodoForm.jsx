import { useState } from "react"

export default function TodoForm({ addTodoTask }) {
    const [inputTaskValue, setInputTaskValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setInputTaskValue('')
    }

    const handleChange = (e) => {
        setInputTaskValue(e.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={inputTaskValue}
                    className="todo_input"
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                />
                <button type="submit" className="submitBtn" onClick={() => addTodoTask(inputTaskValue)}></button>
            </form>
        </>
    )
}
