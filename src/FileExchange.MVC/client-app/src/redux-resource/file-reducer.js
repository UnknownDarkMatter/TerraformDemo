import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import  axios from 'axios';
import {GET_FILES} from './constants';

const defaultFileList = [{
	friendlyName:'my file',
	hashedName:''
  }];

const initialState = {
  data: defaultFileList,
  loading: false,
  error: false,
};

export const fetchFilesDataThunk = createAsyncThunk('files/getAll', async (_, thunkApi) => {
	  const response = await axios(`${process.env.REACT_APP_BACKEND_BASE_URL}File/GetAll`);
	  //thunkApi.dispatch(getFiles(response.data, GET_FILES));
	  return response.data;
});

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
    getFiles: (state = defaultFileList, action) => {
			switch(action.type) {	
				case GET_FILES:{
					return [...state, action.payload];
				}
				default:{
					return [...state, action.payload];
				}
			}
		},
	},
	extraReducers: (builder) => {
		builder
		.addCase(fetchFilesDataThunk.fulfilled, (state, action) => {
			state.status = 'succeeded';
			state.data = action.payload;
		});
	},
});

// Actions
export const { getFiles } = filesSlice.actions;

// Selector
export const getFileSlice = (state) => state.file;

// Reducer
const FilesReducer = filesSlice.reducer;

export default FilesReducer;