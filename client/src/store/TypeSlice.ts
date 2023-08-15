import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TypeState, itemType } from "../types/type";
import { instance } from '../axios';

export const fetchTypes = createAsyncThunk<itemType[]>(
    'types/fetchTypes',
    async () => {
        const responce = await instance.get('/type');

        return responce.data
    }
)

const initialState: TypeState = {
    types: [],
    selectedType: ''
}

const TypeSlice = createSlice({
    name: 'TypeSlice',
    initialState,
    reducers: {
        toggleSelectedType(state, action: PayloadAction<string>) {
            state.selectedType = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchTypes.fulfilled, (state, action: PayloadAction<itemType[]>) => {
            state.types = action.payload;
        })
    },
})

export default TypeSlice.reducer;
export const { toggleSelectedType } = TypeSlice.actions;
