import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import authApi from '../../api/authApi';
import StorageKeys from '../../constants/storage-keys';

export const login = createAsyncThunk(
    'auth/login',
    async (payload) => {
        try {
            // const isAdmin = await authApi.checkAdmin(payload);
            
            // localStorage.setItem(StorageKeys.admin,  JSON.stringify(isAdmin.data.message)|| {});             
            const response = await authApi.login(payload);
            localStorage.setItem(StorageKeys.access, response.data.access);
            localStorage.setItem(StorageKeys.refresh, response.data.refresh);
            // const username = JSON.parse(response.config.data).username
            // const responseUser = await authApi.getUser({ username: username })
            // const user = {...responseUser.data[0]}
            // try{
            //     const responseProfile = await authApi.getProfile(user)
           
            //     const profile = {...responseProfile.data.user}
                
            //     const data = {
            //         ...user,
            //         ...profile,
                    
            //     }
            //     console.log("data:",data)
            //     localStorage.setItem(StorageKeys.user, JSON.stringify(data));
            //     // console.log("data:",data)
            //     return data
            // }
            // catch (error) {
            //     const data = {
            //         ...user,
                     
                    
            //     }
            //     console.log("data:",data)
            //     localStorage.setItem(StorageKeys.user, JSON.stringify(data));
            //     // console.log("data:",data)
            //     return data
            // }
             
        } catch (error) {
            console.log("error:",error)
            return error.message;
        }
    }
)

const AuthSlice = createSlice({
    name: 'auth',
    initialState: {
        accuracy:localStorage.getItem(StorageKeys.admin)  ,
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
            state.accuracy = localStorage.getItem(StorageKeys.admin);
        }
        
    }
})

const { actions, reducer } = AuthSlice
export const { logout } = actions
export default reducer