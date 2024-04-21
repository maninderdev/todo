import { useState } from 'react'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import { format } from 'date-fns';
import { IoCloseOutline } from "react-icons/io5";
import { addTodo } from '../slice/TodoSlice';



function Modal({ modalOpen , setModalOpen}){

    const [title, setTitle] = useState('');
    const [status, setStatus] = useState('incomplete');
    
    const dispatch = useDispatch(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        if(title.length === 0){
            toast.error('Please Enter Title');
        }
        if( title && status ){
            dispatch(
                addTodo({
                    id: uuid(),
                    title: title,
                    status: status,
                    time: format(new Date(), "p,yyyy-MM-dd")
                })
            )
            setTitle('');
            setStatus('incomplete')
            toast.success('TODO Added Successfully');
            setModalOpen(false);
        }
        return false;
    }

    return (
        <>
        { modalOpen && (
        <div className="modal-wrapper">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="heading-wrapper">
                        <h4>Add TODO</h4>
                        <button className="close-btn" onClick={() => {setModalOpen(false)}}><IoCloseOutline/></button>
                    </div>
                    <form onSubmit={(e) => {handleSubmit(e)}}>
                        <div className="input-group">
                            <label htmlFor="add-title">Title</label>
                            <input type="text" id="title" value={ title } onChange={(e) => {setTitle(e.target.value)}} placeholder="Add Title" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="status">Status</label>
                            <select name="sort" id="status" value={ status } onChange={(e) => {setStatus(e.target.value)}}>
                                <option value="completed">Completed</option>
                                <option value="incomplete">Incomplete</option>
                            </select>
                        </div>
                        <div className="cta-wrapper">
                            <button className="primary-btn" type="submit">Add Task</button>
                            <button className="secondary-btn close-btn" type="button" onClick={() => {setModalOpen(false)}}>Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )}
        </>
    )
}

export default Modal;