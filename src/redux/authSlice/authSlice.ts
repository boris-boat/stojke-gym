import { createSlice } from '@reduxjs/toolkit';

interface RouterState {
    currentUser: any;
}

const initialState: RouterState = {
    currentUser:null
};

const authSlice = createSlice({
    name: 'termin',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;