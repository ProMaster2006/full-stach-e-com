import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { IDeviceItem } from '../types/types'
import { instance, } from '../axios';

export const fetchAllDevices = createAsyncThunk<IDeviceItem[], string>(
    'devices/fetchAllDevices',
    async (typeId) => {
        const responce = await instance.get('/device/all?typeId=' + typeId)
        
        return responce.data;
    }
)

interface sortDevicesParams {
    typeId: string;
}

export const fetchSortDevices = createAsyncThunk<IDeviceItem[],sortDevicesParams>(
    'devices/fetchSortDevices',
    async (params) => {
        const responce = await instance.get('/device/all?typeId=' + params.typeId);

        return responce.data;
    }
)

interface IInitialState {
    devices: IDeviceItem[]
    loading: boolean
    page: number
    totalCount: number
    limit: number
}

const initialState: IInitialState = {
    devices: [],
    loading: false,
    page: 1,
    totalCount: 0,
    limit: 2
}

const deviceSlice = createSlice({
    name: 'deviceSlice',
    initialState,
    reducers: {
        setPage(state, action) {
            state.page = action.payload
        }
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchAllDevices.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchAllDevices.fulfilled, (state, action: PayloadAction<IDeviceItem[]>) => {
            state.loading = false
            state.devices = action.payload
        })
        builder.addCase(fetchSortDevices.pending, (state) => {
            state.loading = true
        })
        builder.addCase(fetchSortDevices.fulfilled, (state, action: PayloadAction<IDeviceItem[]>) => {
            state.loading = false
            state.devices = action.payload
        })
    }
})

export default deviceSlice.reducer;
export const { setPage } = deviceSlice.actions;