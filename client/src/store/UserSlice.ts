import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IUserinfo} from "../types/user";
import { RegisterModalinputs, LoginModalFormInputs } from "../types/inputs";
import { instance, authInstance } from '../axios';
import jwtDecode from "jwt-decode";
import { useAppDispatch } from "../types/storeFunc";

export const registerUser = createAsyncThunk<IUserinfo, RegisterModalinputs>(
    'fetch/registerUser',
    async (body)  => {
        const {data} = await instance.post('user/registration', {...body})
        localStorage.setItem('token', data);
        return jwtDecode(data);
    }
)

export const loginUser = createAsyncThunk<any, LoginModalFormInputs>(
    'fetch/loginUSer',
    async (body) => {
        const {data} = await instance.post('user/login', {...body})
        
        localStorage.setItem('token', data);
        const decoded = jwtDecode(data)

        return decoded;
    }
)

export const check = createAsyncThunk<any, void>(
    'fetch/check',
    async () => {
        try {  
            const {data} = await authInstance.get('user/auth')

            localStorage.setItem('token', data)

            return jwtDecode(data)

        } catch (error) {
            console.log(error)
        }

    }
)

const isLoading = (state: IUserinfo, action: PayloadAction<void>) => {
    state.loading = !state.loading
}

const isEndLoading = (state: IUserinfo, action: PayloadAction<void>) => {
    state.loading = !state.loading

    if(localStorage.getItem('token') != 'exit') {
        state.user = action.payload
    }
    
}

const initialState: IUserinfo = {
    user: {},
    isAuth: false,
    loading: false
}

const UserSlice = createSlice({
    name: 'UserSlice',
    initialState,
    reducers: {
        toggleIsAuth(state, action: PayloadAction<void>) {
            state.isAuth = !state.isAuth
        }
    },
    extraReducers(builder) {
        builder.addCase(registerUser.fulfilled, (state, action: PayloadAction<IUserinfo>) => {
            state.isAuth = true;
            state.user = action.payload
        })
        builder.addCase(check.pending, isLoading)
        builder.addCase(check.fulfilled, isEndLoading)
        builder.addCase(loginUser.fulfilled, (state, action: PayloadAction<any>) => {
            state.isAuth = true;
            state.user = action.payload
        }) 

    },
})

export const { toggleIsAuth } = UserSlice.actions;
export default UserSlice.reducer;