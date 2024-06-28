import { useState } from "react"

export default function TodoForm({ addTodoTask }) {
    const [inputTaskValue, setInputTaskValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodoTask(inputTaskValue)
        setInputTaskValue('')
    }

    const handleChange = (e) => {
        setInputTaskValue(e.target.value)
    }

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="submitBtn" ></button>
                <input
                    type="text"
                    value={inputTaskValue}
                    className="todo_input"
                    onChange={handleChange}
                    placeholder="Create a new todo..."
                />
            </form>
        </>
    )
}
