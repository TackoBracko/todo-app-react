import Header from "./components/Header.jsx"
import TodoForm from "./components/TodoForm.jsx"
import TodoList from "./components/TodoList.jsx"
import TodoButtons from "./components/TodoButtons.jsx"
import { useState } from "react"

function App() {
    const [darkMode, setDarkMode] = useState(true);
    const [tasks, setTasks] = useState([])

    const toggleDarkMode = () => {
        setDarkMode(prevMode => !prevMode);
    }

    const addTodoTask = (inputTaskValue) => {
        if (typeof inputTaskValue === 'string' && inputTaskValue.trim() !== '') {
            const newTask = {
                title: inputTaskValue,
                id: Math.random(),
                completed: false
            }

            setTasks([...tasks, newTask])
        }
    }
    
    const toggleTaskStatus = (id) => {
        setTasks(tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            }
            return task
        }))
    }

    const deleteTask = (id) => {
        setTasks(tasks.filter(task => { 
            return (task.id !== id)
        }))
    }

    return (
        <>
            <div className={`app_container ${darkMode ? 'dark_mode' : 'light_mode'}`}>
                <div className='container'>
                    <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
                    <TodoForm addTodoTask={addTodoTask} />
                    <TodoList tasks={tasks} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
                    {tasks.length > 0 && <TodoButtons tasks={tasks} />}
                </div>
            </div>
        </>
    )
}

export default App;

