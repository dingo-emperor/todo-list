import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import stateType from "../../app/stateType";

type State = stateType["message"];

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message: ''
    } as State,
    reducers: {
        updateMessage: (state: State, action: PayloadAction<string>) => {
            return {
                ...state,
                message: action.payload
            }
        }
    }
})

export const { updateMessage } = messageSlice.actions;
export default messageSlice.reducer;