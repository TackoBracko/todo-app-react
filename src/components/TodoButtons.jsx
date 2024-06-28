export default function TodoButtons({tasks}) {

    return (
        <>
            <div className="todo_btns">
                <p> {tasks.length} task(s) left</p>

                <div>
                    <button className="tags_btns one">All</button>
                    <button className="tags_btns">Active</button>
                    <button className="tags_btns">Completed</button>
                    <button className="tags_btns" >Clear Completed</button>
                </div>

            </div>
        </>
    )
}