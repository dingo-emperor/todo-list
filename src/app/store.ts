import { configureStore } from '@reduxjs/toolkit';
import messageReducer from '../features/message/messageSlice';
import listReducer from '../features/list/listSlice';

export default configureStore({
    reducer: {
        message: messageReducer,
        list: listReducer
    }
})