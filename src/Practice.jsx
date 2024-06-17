export default function Practice ({tasks}) {
    return (
        <>
            <h1>This is for practice</h1>
            <ul>
                <li>{tasks[0].title}</li>
                <li>{tasks[1].title}</li>
                <li>{tasks[2].title}</li>
                <li>{tasks[3].title}</li>
                <li>{tasks[4].title}</li> 
            </ul>
        </>
    )
}

/*export default function Practice ({tasks}) {
    return (
        <>
            <h1>This is for practice</h1>
            {tasks.map((task) => (
                <ul>
                    <li>
                        {task.title}
                    </li>
                </ul>
            ))}
        </>
    )
}*/

