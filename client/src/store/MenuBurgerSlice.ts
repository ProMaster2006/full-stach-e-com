import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
    activeMenuBurger: false
}

const MenuBurgerSlice = createSlice({
    name: 'MenuBurgerSlice',
    initialState,
    reducers: {
        toggleMenuBurger(state, action: PayloadAction<void>) {
            state.activeMenuBurger = !state.activeMenuBurger
        }
    }
})

export default MenuBurgerSlice.reducer;
export const { toggleMenuBurger } = MenuBurgerSlice.actions