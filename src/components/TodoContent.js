import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoContent(){
    const todoList = useSelector(state => state.todo.todoList);
    const filterStatus = useSelector(state => state.todo.filterStatus);
    const sortedArr = [...todoList];
    console.log(sortedArr);
    sortedArr.sort((a,b) => new Date(b.time) - new Date(a.time));
    console.log(sortedArr);

    const filterArr = sortedArr.filter((item) => {
        if(filterStatus === 'all'){
            return true;
        }
        return item.status === filterStatus;
    });
    const completedCount = () => {
        let count = 0;
        todoList.forEach((item, index)=> {
            if(item.status === 'completed'){
                count++;
            }
        });
        return count;
    }
    return (
        <div className="todo-content">
            <div className="head-label">
                <span className="todo-count">Total Tasks: <b>{todoList.length}</b></span>
                <span className="completed-count">Completed: <span className="out-of">{completedCount()} of {todoList.length}</span></span>
            </div>
            <div className="task-listing">
                { filterArr.length !== 0 &&
                    filterArr.map((item) => (
                        <TodoItem key={item.id} item={item} />
                    ))
                }
                {
                    filterArr.length === 0 &&
                    (
                        <div className="no-results">No Todo  Found</div>
                    )
                }
            </div>
        </div>
    )
}

export default TodoContent;