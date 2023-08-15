import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IDeviceItem } from "../types/types";
import { instance } from '../axios';

export const fetchDeviceItem = createAsyncThunk<IDeviceItem, undefined | string>(
   'DeviceItem/fetchDeviceItem',
    async (id) => {
      const responce = await instance.get('device/' + id)
      
      return responce.data
    }
)

interface IInitialState {
    deviceItem: IDeviceItem
}


const initialState: IInitialState = {
   deviceItem: {
        _id: '',
        name: '',
        price: 0,
        img: '',
        type: '',
   }
}

const deviceItemSlice = createSlice({
    name: 'deviceItemSlice',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchDeviceItem.fulfilled, (state, action: PayloadAction<IDeviceItem>) => {
            state.deviceItem = action.payload
        })  
    },
})

export default deviceItemSlice.reducer;
