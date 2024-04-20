import { configureStore } from '@reduxjs/toolkit'; 
import TodoReducer from '../slice/TodoSlice'

const Store = configureStore({
    reducer: {
        todo: TodoReducer,
    }
});


export default Store;