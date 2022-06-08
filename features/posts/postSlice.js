import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './postService'



  // Perform localStorage action
  const user = (typeof window !== 'undefined') ? JSON.parse(localStorage.getItem('user')): null



const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}


export const addPost = createAsyncThunk(
    'posts/addPost',
    async (post, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await postService.addPost(post, token)
      } catch (error) {
        const message =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
  )


export const getPosts = createAsyncThunk(
    'posts/getPosts',
    async( _ ,thunkAPI)=>{

        try{
            const token = thunkAPI.getState().auth.user.token
            return await postService.getPosts(token)
        }
        catch(error){
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    })


    export const getAllPosts = createAsyncThunk(
      'posts/getAllPosts',
      async( _ ,thunkAPI)=>{
  
          try{
              const token = thunkAPI.getState().auth.user.token
              return await postService.getAllPosts(token)
          }
          catch(error){
              const message =
                  (error.response &&
                      error.response.data &&
                      error.response.data.message) ||
                  error.message ||
                  error.toString()
              return thunkAPI.rejectWithValue(message)
          }
      })
    
  
export const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
      reset: (state) => {
        state.posts = []
        state.isError = false
        state.isSuccess = false
        state.isLoading = false
        state.message = ''
      }
    
    },
    extraReducers: (builder) => {
      builder
        .addCase(addPost.pending, (state) => {
          state.isLoading = true;
        })
        .addCase(addPost.fulfilled, (state, action) => {
          state.posts= [...state.posts, action.payload];
          state.isSuccess = true;
          state.isLoading = false;
        })
        .addCase(addPost.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            state.user = null;
        })
        .addCase(getPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.posts = action.payload;
        })
        .addCase(getPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;

        })
        .addCase(getAllPosts.pending, (state) => {
            state.isLoading = true;
        })
        .addCase(getAllPosts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.posts = action.payload;
        })
        .addCase(getAllPosts.rejected, (state, action)=>{
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload; 

        });
    },
  });
  
  export const {reset} = postSlice.actions;
  export default postSlice.reducer