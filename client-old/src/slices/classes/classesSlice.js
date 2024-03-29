// TODO: delete removeClass reducer
/* eslint-disable object-curly-newline,operator-linebreak */
/* eslint-disable comma-dangle */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-param-reassign */
/* eslint-disable consistent-return */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from '../../utils/axios';

const initialState = {
  classes: [],
  status: null,
  error: null,
  isLoading: true,
  imageUrl: null,
  isLoadingImage: true,
};

export const getClasses = createAsyncThunk('classes/getClasses', async () => {
  try {
    const { data } = await axios.get('/classes/get');

    return data;
  } catch (error) {
    console.log(error);
  }
});

export const createClass = createAsyncThunk(
  'classes/createClass',
  async ({ className, classDescription, classImage, classUrl, showOnMainPage }) => {
    try {
      const { data } = await axios.post('/classes/create', {
        className,
        classDescription,
        classImage,
        classUrl,
        showOnMainPage
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const deleteClass = createAsyncThunk(
  'classes/deleteClass',
  async (id) => {
    try {
      const { data } = await axios.post(`/classes/delete/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const updateClass = createAsyncThunk(
  'classes/updateClass',
  async ({ className, classDescription, classImage, classID, classUrl, showOnMainPage }) => {
    try {
      const response = await axios.post(`/classes/update/${classID}`, {
        classID,
        className,
        classDescription,
        classImage,
        classUrl,
        showOnMainPage
      });

      return response.data;
    } catch (e) {
      console.log(e);
    }
  }
);

export const uploadPicture = createAsyncThunk(
  'classes/uploadPicture',
  async (file) => {
    const formData = new FormData();
    formData.append('file', file);

    if (
      file.type === 'image/webp' ||
      file.type === 'image/jpeg' ||
      file.type === 'image/jpg' ||
      file.type === 'image/png'
    ) {
      if (file.size < 5000000) {
        try {
          const { data } = await axios.post(
            'http://46.175.150.173:3002/upload',
            formData,
            { 'Content-Type': 'multipart/form-data' }
          );
          return data;
        } catch (error) {
          console.log(error);
        }
      }

      return {
        message: 'Зображення важить надто багато',
      };
    }

    return {
      message: 'Не вірний формат зображення',
    };
  }
);

export const classesSlice = createSlice({
  name: 'classes',
  initialState,
  reducers: {
    removeClass: (state, action) => {
      state.classes = state.classes.filter(
        (classes) => classes._id !== action.payload
      );
      state.status = null;
    },
  },
  extraReducers: {
    [getClasses.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [getClasses.fulfilled]: (state, action) => {
      state.classes = action.payload;
      state.isLoading = false;
    },
    [getClasses.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [createClass.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [createClass.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [createClass.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [deleteClass.pending]: (state) => {
      state.isLoading = true;
      state.status = null;
    },
    [deleteClass.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [deleteClass.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [uploadPicture.pending]: (state) => {
      // state.isLoading = true;
      state.status = null;
    },
    [uploadPicture.fulfilled]: (state, action) => {
      state.status = action.payload.message;
      state.imageUrl = action.payload.link;
      state.isLoadingImage = state.imageUrl === null;
    },
    [uploadPicture.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.payload.message;
    },
    [updateClass.pending]: (state) => {
      state.isLoading = true;
    },
    [updateClass.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.status = action.payload.message;
    },
    [updateClass.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.status = action.payload.message;
    },
  },
});

export const { removeClass } = classesSlice.actions;
export default classesSlice.reducer;
