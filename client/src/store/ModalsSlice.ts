import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/dist/createAction";


interface IInitialState {
    isVisibleRegModal: boolean
    isHiddenSuncModal: boolean
    isVisibleLoginModal: boolean

}

const initialState:IInitialState = {
    isVisibleRegModal: false,
    isHiddenSuncModal: true,
    isVisibleLoginModal: false
}

const ModalsSlice = createSlice({
    name: 'ModalsSlice',
    initialState,
    reducers: {
        toggleVisRegModal(state, action: PayloadAction<void>) {
            state.isVisibleRegModal = !state.isVisibleRegModal
        },
        toggleVisSuncModal(state, action: PayloadAction<void>) {
            state.isHiddenSuncModal = !state.isHiddenSuncModal
        },
        toggleVisLoginModal(state, action: PayloadAction<void>) {
            state.isVisibleLoginModal = !state.isVisibleLoginModal
        }
    }
})

export const { toggleVisRegModal, toggleVisSuncModal, toggleVisLoginModal } = ModalsSlice.actions;
export const modalsReducer = ModalsSlice.reducer;