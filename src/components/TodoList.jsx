import TodoItem from "./TodoItem"

export default function TodoList({ tasks, toggleTaskStatus, deleteTask }) {
    return (
        <ul>
            {tasks.map(task => (
                <TodoItem key={task.id} task={task} toggleTaskStatus={toggleTaskStatus} deleteTask={deleteTask} />
                
            ))}
        </ul> 
    )
}