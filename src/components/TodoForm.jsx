import { useRef, useState } from "react"

export default function TodoForm({ addTodoTask }) {
    //const [inputTaskValue, setInputTaskValue] = useState('')
    const todoTask = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        addTodoTask(todoTask.current.value)
        todoTask.current.value = ''
        //addTodoTask(inputTaskValue)
        //setInputTaskValue('')
    }

    //const handleChange = (e) => {
    //    setInputTaskValue(e.target.value)
    //}

    return (
        <>
            <form className="form" onSubmit={handleSubmit}>
                <button type="submit" className="submitBtn" ></button>
                <input
                    ref={todoTask}
                    type="text"
                    className="todo_input"
                    placeholder="Create a new todo..."
                    //value={inputTaskValue}
                    //onChange={handleChange}
                />
            </form>
        </>
    )
}
