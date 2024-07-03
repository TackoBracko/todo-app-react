import TodoForm from "./TodoForm.jsx"
import TodoList from "./TodoList.jsx"
import TodoButtons from "./TodoButtons.jsx"
import { useState } from "react"

export default function TasksWrapper() {
    const [tasks, setTasks] = useState([])
    const [status, setStatus] = useState('all')
    
    const addTodoTask = (inputTaskValue) => {
        if (inputTaskValue.trim() !== '') {
            const newTask = {
                title: inputTaskValue,
                id: Math.random(),
                completed: false
            }
    
            setTasks([...tasks, newTask])
            console.log(inputTaskValue)
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
        setTasks(tasks.filter(task => task.id !== id))
    }

    const filteredTasks = (status, tasks) => {
        if (status === 'all') return tasks
        if (status === 'active') return tasks.filter(task => !task.completed)
        if (status === 'completed') return tasks.filter(task => task.completed)
        
        return tasks
    }

    const filterAllTasks = () => {
        setStatus('all')
    }

    const filterActiveTasks = () => {
        setStatus('active')
    }

    const filterCompletedTasks = () => {
        setStatus('completed')
    }

    const clearCompletedTasks = () => {
        setTasks(tasks.filter(task => !task.completed))
    }

    return (
        <>
            <TodoForm addTodoTask={addTodoTask} />
            <TodoList tasks={filteredTasks(status, tasks)} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
            {tasks.length > 0 &&
                <TodoButtons
                    filterAllTasks={filterAllTasks}
                    filterActiveTasks={filterActiveTasks}
                    filterCompletedTasks={filterCompletedTasks}
                    clearCompletedTasks={clearCompletedTasks}
                />
            }
        </>
    )
}    
