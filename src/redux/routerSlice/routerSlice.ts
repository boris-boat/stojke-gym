import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RouterState {
    currentPage: string;
}

const initialState: RouterState = {
    currentPage: 'profile',
};

const routerSlice = createSlice({
    name: 'router',
    initialState,
    reducers: {
        setCurrentPage(state, action: PayloadAction<string>) {
            state.currentPage = action.payload;
        },
    },
});

export const { setCurrentPage } = routerSlice.actions;

export default routerSlice.reducer;