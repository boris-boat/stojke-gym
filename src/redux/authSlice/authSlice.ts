import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

interface RouterState {
    currentUser: any;
}

const initialState: RouterState = {
    currentUser:null
};
// Async thunk for logging in
export const loginUser = createAsyncThunk(
    "auth/loginUser",
    async ({ email, password }, { rejectWithValue }) => {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  
      if (error) return rejectWithValue(error.message);
  
      const user = data.user;
  
      // Fetch user role & force_password_reset flag
      const { data: userData, error: userError } = await supabase
        .from("users")
        .select("role, force_password_reset")
        .eq("id", user.id)
        .single();
  
      if (userError) return rejectWithValue(userError.message);
  
      return {
        user,
        role: userData.role,
        forcePasswordReset: userData.force_password_reset
      };
    }
  );
  
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCurrentUser(state, action) {
            state.currentUser = action.payload;
        },
    },
});

export const { setCurrentUser } = authSlice.actions;

export default authSlice.reducer;