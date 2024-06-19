export default function TodoItem({ task }) {
    return (
        <li className="task">
            <input type="checkbox" className="task_checkbox" />
            {task.title}
            <button className="task_deleteBtn" aria-label="Close">X</button>
        </li>
    )
}
