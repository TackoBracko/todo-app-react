export default function TodoButtons({ filterTasks, clearCompletedTasks }) {
    return (
        <div className="todo_btns">
            <div>
                <button className="tags_btns one" onClick={() => filterTasks('all')}>All</button>
                <button className="tags_btns" onClick={() => filterTasks('active')}>Active</button>
                <button className="tags_btns" onClick={() => filterTasks('completed')}>Completed</button>
                <button className="tags_btns" onClick={clearCompletedTasks}>Clear Completed</button>
            </div>
        </div>
    )
}
