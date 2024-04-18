function TodoHeader(){
 return (
    <div className='todo-header'>
        <div className='logo-wrapper'>
            <img src={`${process.env.PUBLIC_URL}/images/Logo.svg`} alt='Todo List' width="126" height="48" />
        </div>
        <div className='controls-wrapper'>
            <button type='button' className='primary-button'>Add Task</button>
            <select name="sort" id="sort-by">
                <option value="all">All</option>
                <option value="completed">Completed</option>
                <option value="Incomplete">Incomplete</option>
            </select>
        </div>
    </div>
    )
}

export default TodoHeader;