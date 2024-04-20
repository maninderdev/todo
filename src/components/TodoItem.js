import { FaRegTrashCan } from "react-icons/fa6";

function TodoItem({item}){
    console.log(item)

    const todoChecked = (item.status === 'completed') ? 'true' : 'false';
    
    return (
        <div className={'task-item '  + item.status}>
            <div className="status-task">
                <input type="checkbox" id="todo-1" name="todo-1"  defaultChecked={ todoChecked } />
            </div>
            <h4 className='title'>{(item.title)}</h4>
            <div className="cta-wrapper">
                <button className='del-todo'><FaRegTrashCan/></button>
            </div>
        </div>
    )
}

export default TodoItem;