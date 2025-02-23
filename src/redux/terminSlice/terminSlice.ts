import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouterState {
    selectedTermin: string | null;
}

const initialState: RouterState = {
    selectedTermin:null
};

const terminSlice = createSlice({
    name: 'termin',
    initialState,
    reducers: {
        setFocusedTermin(state, action) {
            state.selectedTermin = action.payload;
        },
    },
});

export const { setFocusedTermin } = terminSlice.actions;

export default terminSlice.reducer;