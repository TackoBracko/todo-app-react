export default function TodoButtons({ filterAllTasks, filterActiveTasks, filterCompletedTasks, clearCompletedTasks }) {
    return (
        <>
            <div className="todo_btns">
                <span>5 items left</span>
                <ul className="filter_btns_list">
                    <button className="filter_btn one" onClick={filterAllTasks}>All</button>
                    <button className="filter_btn" onClick={filterActiveTasks}>Active</button>
                    <button className="filter_btn" onClick={filterCompletedTasks}>Completed</button>
                </ul>
                <button className="clear_all_btn" onClick={clearCompletedTasks}>Clear Completed</button>
            </div>

            <div>
                <ul className="filter_btns_show">
                    <button className="filter_btn one" onClick={filterAllTasks}>All</button>
                    <button className="filter_btn" onClick={filterActiveTasks}>Active</button>
                    <button className="filter_btn" onClick={filterCompletedTasks}>Completed</button>
                </ul>
            </div>
        </>
    )
}
