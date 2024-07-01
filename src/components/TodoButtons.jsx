export default function TodoButtons({ filterTasks, clearCompletedTasks }) {
    return (
        <>
            <div className="todo_btns">
                <span>5 items left</span>
                <ul className="filter_btns_list">
                    <li className="filter_btn one" onClick={() => filterTasks('all')}>All</li>
                    <li className="filter_btn" onClick={() => filterTasks('active')}>Active</li>
                    <li className="filter_btn" onClick={() => filterTasks('completed')}>Completed</li>
                </ul>
                <button className="clear_all_btn" onClick={clearCompletedTasks}>Clear Completed</button>
            </div>

            <div>
                <ul className="filter_btns_show">
                    <li className="filter_btn one" onClick={() => filterTasks('all')}>All</li>
                    <li className="filter_btn" onClick={() => filterTasks('active')}>Active</li>
                    <li className="filter_btn" onClick={() => filterTasks('completed')}>Completed</li>
                </ul>
            </div>
        </>
    )
}
