import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import StorageKeys from '../../constants/storage-keys';

export const login = createAsyncThunk(
    'auth/login',
    async (payload) => {
        try {            
            const response = await authApi.login(payload);
            localStorage.setItem(StorageKeys.access, response.data.access);
            localStorage.setItem(StorageKeys.refresh, response.data.refresh);
            const username = JSON.parse(response.config.data).username
            const responseUser = await authApi.getUser({ username: username })
            const user = {...responseUser.data[0]}
            const data = {...user,}
            localStorage.setItem(StorageKeys.user, JSON.stringify(data));
            
            return data
          
             
        } catch (error) {
            console.log("error:",error)
            return error.message;
        }
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        accuracy:localStorage.getItem(StorageKeys.user)  ,
        current: JSON.parse(localStorage.getItem(StorageKeys.user)) || {},
         
        settings: {},
    },
    reducers: {
        logout(state) {
            //clear local storage
            authApi.logout();
            state.current = {}
            // localStorage.removeItem(StorageKeys.access)
            // localStorage.removeItem(StorageKeys.refresh)
            // localStorage.removeItem(StorageKeys.user)
            // localStorage.removeItem(StorageKeys.admin)
             
        }
    },
    extraReducers: {
        //'user/register/fulfilled': () => {}
       

        [login.fulfilled]: (state, action) => {
            state.current = action.payload;
            state.accuracy = localStorage.getItem(StorageKeys.user);
        }
        
    }
})

const { actions, reducer } = AuthSlice
export const { logout } = actions
export default reducer