import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getWebsites } from '../../api';

const initialState = {
  isLoading: false,
  error: null,
  sites: [],
  copyrightInfo: [],
};

export const getWebsitesAction = createAsyncThunk(
  'app/getWebsitesAction',
  async () => {
    const response = await getWebsites();
    return response.data;
  },
);

const { actions, reducer } = createSlice({
  name: 'sites',
  initialState,
  reducers: {
    setCopyRightInfo: (state, action) => {
      const existItem = state.copyrightInfo.indexOf(action.payload);
      if (existItem === -1) {
        state.copyrightInfo.push(action.payload);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getWebsitesAction.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getWebsitesAction.fulfilled, (state, action) => {
      state.sites = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getWebsitesAction.rejected, (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { setCopyRightInfo } = actions;

export default reducer;
