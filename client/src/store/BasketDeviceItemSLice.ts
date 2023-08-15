import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { bskDeviceItem } from "../types/bskDeviceItem";
import { instance, authInstance } from '../axios';

export const fetchBasketDeviceItem = createAsyncThunk<any, any>(
    'basketDevice/fetchBasketDeviceItem',
    async (body) => {
            const data = await instance.post('bskDevice/create', {...body})
        
            return data;
    }
)

export const fetchClearBasketItems = createAsyncThunk<void, string>(
    'basketDevice/fetchClearBasketItems',
    async (bskId) => {
             await instance.post('bskDevice/remove?bskId=' + bskId)
    }
)

export const getBasketsItems = createAsyncThunk(
    'fetch/getBskItems',
    async () => {
        const {data} = await authInstance.get('/bskDevice/all');

        return data
    }
)

interface IBasketDeviceState {
    basketItems: itemBasket[]
}

interface itemBasket { 
    _id: string
    device_id: string
    basket_id: string
    size: string
    color: string
    count: string
    img: string
    price: number
    createdAt: string
    updatedAt: string
    __v: number
}

const initialState: IBasketDeviceState = {
    basketItems: []
}

const BasketDeviceItemSlice = createSlice({
    name: 'BasketDeviceItemSlice',
    initialState,
    reducers: {
        clearBasketItems(state, action: PayloadAction<void>) {
            state.basketItems = []
        }
    },
    extraReducers(builder) {
        builder.addCase(getBasketsItems.fulfilled, (state, action: PayloadAction<any>) => {
            state.basketItems = action.payload
        })
    },
})

export const { clearBasketItems } = BasketDeviceItemSlice.actions;

export default BasketDeviceItemSlice.reducer;