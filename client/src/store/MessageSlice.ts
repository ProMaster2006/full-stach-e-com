import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { messageTypes, responceMessage} from "../types/fetchMessage";
import { instance, authInstance } from '../axios';

export const fetchMessage = createAsyncThunk<any, messageTypes>(
    'message/fechMessage',
    async (body) => {
        const responce = await instance.post('message/create', {...body})

        return responce.data;

    }
)

const initialState: responceMessage = {
    message: ''
}

const MessageSlice = createSlice({
    name: 'MessageSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchMessage.fulfilled, (state, action: PayloadAction<responceMessage>) => {
            state = action.payload
        })
    },
})

export default MessageSlice.reducer;
