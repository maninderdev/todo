import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoContent(){
    const todoList = useSelector(state => state.todo.todoList);
    
    return (
        <div className="todo-content">
            <div className="head-label">
                <span className="todo-count">Total Tasks: <b>20</b></span>
                <span className="completed-count">Completed: <span className="out-of">2 of 5</span></span>
            </div>
            <div className="task-listing">
                {
                    todoList.map((item) => (
                        <TodoItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoContent;