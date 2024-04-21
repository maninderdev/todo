import { FaRegTrashCan } from "react-icons/fa6"
import { useDispatch } from "react-redux"
import { delTodo, updateTodo } from "../slice/TodoSlice"
import toast from 'react-hot-toast'

function TodoItem({item}){


    const todoChecked = (item.status === 'completed') ? true : false;
    
    const dispatch = useDispatch();

    const handleDel = () => {
        dispatch(
            delTodo(item.id)
        );
        toast.success('TODO Deleted Successfully.')
    };

    const handleCheckbox = (e) => {
        let checkedStatus = 'completed';
        if(e.target.checked === false){
            checkedStatus = 'incomplete';
        }
        dispatch(
            updateTodo({...item, status: checkedStatus})
        )
        toast.success('TODO Updated Successfully');
    }

    return (
        <div className={'task-item '  + item.status}>
            <div className="status-task">
                <input type="checkbox" id="todo-1" name="todo-1" onChange={(e) => {handleCheckbox(e)}} {...(todoChecked && { defaultChecked: true })}/>
            </div>
            <h4 className='title'>{(item.title)}</h4>
            <div className="cta-wrapper">
                <button className='del-todo' onClick={()=>{handleDel()}}><FaRegTrashCan/></button>
            </div>
        </div>
    )
}

export default TodoItem;