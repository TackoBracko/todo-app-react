import { useState } from "react"

export default function TodoForm({tasks, setTasks}) {
    const [inputTaskValue, setInputTaskValue] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        setInputTaskValue(e.target.value)
    }

    const addTodoTask = () => {
        if (inputTaskValue.trim() !== '') {
            const newTask = {
                title: inputTaskValue,
                id: Math.random()
            }

            setTasks([...tasks, newTask])
            setInputTaskValue('')
        }
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
                <button type="submit" className="submitBtn" onClick={addTodoTask}></button>
            </form>
        </>
    )
}