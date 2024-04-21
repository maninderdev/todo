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
    filterStatus: 'all',
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
        },
        delTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todo');
            if(todoList){
                const todoListArr = JSON.parse(todoList);
                todoListArr.forEach((item, index) => {
                    if(item.id === action.payload){
                        todoListArr.splice(index, 1);
                    }
                });
                state.todoList = todoListArr;
                window.localStorage.setItem('todo', JSON.stringify(todoListArr));
            }
        },
        updateTodo: (state, action) => {
            const todoList = window.localStorage.getItem('todo');
            if(todoList){
                const todoArr = JSON.parse(todoList);
                todoArr.forEach((item, index) => {
                    if( item.id === action.payload.id){
                        item.status = action.payload.status;
                        item.title = action.payload.title;
                    }
                });
                state.todoList = todoArr;
                window.localStorage.setItem('todo', JSON.stringify(todoArr));
            }
        },
        updateFilter: (state, action) => {
            state.filterStatus = action.payload;
        }
    }
})


export const { addTodo, delTodo, updateTodo, updateFilter } = todoSlice.actions

export default todoSlice.reducer