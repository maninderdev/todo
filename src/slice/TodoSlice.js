import { createSlice } from '@reduxjs/toolkit' 

const getInitTodo = () => {

    const localTodoList = window.localStorage.getItem('todo');
    if(localTodoList){
        return JSON.parse(localTodoList);
    }

    window.localStorage.setItem('todo', JSON.stringify([]));
    return [];

}

const initialValue = {
    filterStaus: 'all',
    todoList: getInitTodo()
}

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialValue,
    reducers: {
        addTodo: (state, action) => {
            state.todoList.push(action.payload);
            const todoList = window.localStorage.getItem('todo');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.push({
                    ...action.payload,
                })
                window.localStorage.setItem('todo', JSON.stringify(todoListArr));
            }else{
                window.localStorage.setItem(
                    'todo',
                    JSON.stringify({
                        ...action.payload
                    })
                )
            }
        }
    }
})


export const { addTodo } = todoSlice.actions

export default todoSlice.reducer