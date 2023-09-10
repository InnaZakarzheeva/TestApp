import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  isUserLoggedIn: false,
};

export const loginAction = createAsyncThunk(
  'app/loginAction',
  async (payload, { dispatch }) => {
    dispatch(setIsUserLoggedIn(true));
    return true;
  },
);

const { actions, reducer } = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setIsUserLoggedIn: (state, action) => {
      state.isUserLoggedIn = action.payload;
    },
  },
});

export const { setIsUserLoggedIn } = actions;

export default reducer;
