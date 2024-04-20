import { useState, useEffect } from 'react';
import Modal from './Modal';

function TodoHeader() {
    
    const [modalOpen, setModalOpen] = useState(false);
    
    useEffect(() => {
        if (modalOpen) {
            document.getElementsByTagName('body')[0].classList.add('overflow-hidden');
        } else {
            document.getElementsByTagName('body')[0].classList.remove('overflow-hidden');
        }
    }, [modalOpen]);

    return (
        <div className='todo-header'>
            <div className='logo-wrapper'>
                <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt='Todo List' width="126" height="48" />
            </div>
            <div className='controls-wrapper'>
                <button type='button' className='primary-button' onClick={() => { setModalOpen(true) }}>Add Task</button>
                <select name="sort" id="sort-by">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="Incomplete">Incomplete</option>
                </select>
            </div>
            <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
        </div>
    )
}

export default TodoHeader;