export default function TodoItem({ task, toggleTaskStatus, deleteTask }) {
    
    const handleToggle = () => {
        toggleTaskStatus(task.id)
    }

    const handleDeleteTask = () => {
        deleteTask(task.id)
    }
    
    return (
        <li className={`task ${task.completed ? 'completed' : ''}`}>
            <input type="checkbox" className="task_checkbox" onChange={handleToggle} />
            {task.title}
            <button className="task_deleteBtn" aria-label="Close" onClick={handleDeleteTask}>X</button>
        </li>
    )
}
