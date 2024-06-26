export default function TodoButtons({tasks}) {
    
    return (
        <>
            <section className="todo_btns">
            <span> {tasks.length} tasks left</span>

                <div>
                    <button className="tags_btns one">All</button>
                    <button className="tags_btns">Active</button>
                    <button className="tags_btns">Completed</button>
                </div>

                <div>
                    <button className="tags_btns">Clear Completed</button>
                </div>
            </section>
        </>
    )
}