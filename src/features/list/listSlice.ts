import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import stateType from "../../app/stateType";

type State = stateType["list"];

export const listSlice = createSlice({
    name: 'list',
    initialState: {
        todo_list: [],
        done_list: [],
    } as State,
    reducers: {
        addTodoList: (state: State, action: PayloadAction<any>) => {
            return {
                ...state,
                todo_list: state.todo_list.concat([action.payload])
            }
        },
        removeTodoList: (state: State, action: PayloadAction<any>) => {
            return {
                ...state,
                todo_list: state.todo_list.filter((item) => {
                    return item !== action.payload;
                })
            }
        },
        addDoneList: (state: State, action: PayloadAction<any>) => {
            return {
                ...state,
                done_list: state.done_list.concat([action.payload])
            }
        }
    }
})

export const { addTodoList, removeTodoList, addDoneList } = listSlice.actions;
export default listSlice.reducer;