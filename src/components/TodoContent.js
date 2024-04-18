import { FaRegTrashCan } from "react-icons/fa6";

function TodoContent(){
    return (
        <div className="todo-content">
            <div className="head-label">
                <span className="todo-count">Total Tasks: <b>20</b></span>
                <span className="completed-count">Completed: <span className="out-of">2 of 5</span></span>
            </div>
            <div className="task-listing">
                <div className="task-item">
                    <div className="status-task">
                        <input type="checkbox" id="todo-1" name="todo-1" checked />
                    </div>
                    <h4 className='title'>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</h4>
                    <div className="cta-wrapper">
                        <button className='del-todo'><FaRegTrashCan/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TodoContent;