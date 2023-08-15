import { configureStore } from '@reduxjs/toolkit'
import { modalsReducer } from './ModalsSlice'
import deviceSlice from './DeviseStore'
import deviceItemReducer from './DeviceItemSlice' 
import basketDeviceReducer from './BasketDeviceItemSLice'
import messageReducer from './MessageSlice'
import UserReducer from './UserSlice'
import TypeReducer from './TypeSlice'
import MenuBurgerReducer from './MenuBurgerSlice'

const store = configureStore({
    reducer: {
        modalsReducer,
        deviceSlice,
        deviceItemReducer,
        basketDeviceReducer,
        messageReducer,
        UserReducer,
        TypeReducer,
        MenuBurgerReducer
    }
})

export type stateRoot = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
export default store;