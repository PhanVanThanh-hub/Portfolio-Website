import {createSlice} from '@reduxjs/toolkit';


const themeSlice = createSlice({
    name: 'mode',
    initialState: {
        mode: 'light',
    },
    reducers: {
        changeMode(state, action) {
            state.mode = action.payload.mode;
        },
    }
})

const { actions, reducer } = themeSlice
export const {changeMode} = actions
export default reducer