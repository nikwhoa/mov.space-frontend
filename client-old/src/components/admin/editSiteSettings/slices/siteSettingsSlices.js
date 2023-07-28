/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../../../utils/axios';

const initialState = {
  settings: [
    {
      siteName: 'MOV.space',
      siteSlogan: 'Welcome to MOV.space',
      mainScreenMedia: 'http://46.175.150.173:3002/uploads/4.4.2023-8:24:13PM-video.jpeg',
      mainTextSettings: {
        headingsColor: {
          h1: '#eee',
          h2: '#fff',
          h3: '#fff',
          h4: '#fff',
          h5: '#fff',
          h6: '#fff',
        },
        menuColor: '#fff',
        logoColor: '#fff',
        siteSloganColor: '#fff',
        textColor: '#fff',
        linksColor: '#fff',
        buttonsColor: '#fff',
      },
    },
  ],
  status: null,
  error: null,
  isLoading: true,
};

export const getSettings = createAsyncThunk('site-settings', async () => {
  try {
    const { data } = await axios.get('/site-settings/get');
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const updateSettings = createAsyncThunk(
  'site-settings/update',
  async ({ id, siteName, siteSlogan, mainScreenMedia, classesMainText, trainersMainText, mainTextSettings }) => {
    try {
      const { data } = await axios.post(`/site-settings/update/${id}`, {
        id,
        siteName,
        siteSlogan,
        mainScreenMedia,
        classesMainText,
        trainersMainText,
        mainTextSettings,
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const siteSettingsSlice = createSlice({
  name: 'siteSettings',
  initialState,
  reducers: {},
  extraReducers: {
    [getSettings.pending]: (state, action) => {
      state.isLoading = true;
      state.status = null;
    },
    [getSettings.fulfilled]: (state, action) => {
      state.settings = action.payload;
      state.isLoading = false;
    },
    [getSettings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [updateSettings.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [updateSettings.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [updateSettings.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.payload.message;
    },
  },
});

export default siteSettingsSlice.reducer;
