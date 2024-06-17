export default function TodoItem({ task }) {
    return (
        <li>
            <input type="checkbox" />
            {task.title}
        </li>
    )
}
