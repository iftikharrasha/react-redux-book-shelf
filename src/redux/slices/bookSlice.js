import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBooks = createAsyncThunk(
    'book/fetchBooks',
    async () => {
      const response = await fetch('https://redux-book-shelf.herokuapp.com/books')
      .then(res => res.json())
      return response.data
    }
)

  //what if we are posting something?
//   export const postBooks = createAsyncThunk(
//     'book/postBooks',
//     async (newPost) => {
//       const response = await fetch('https://redux-book-shelf.herokuapp.com/books')
//       .then(res => res.json())
//       return response
//     }
//   )

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: [],
        readingList: [],
        finishedList: [],
        status: 'idle',
    },
    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload);   //here we are mutating directly which wasn't possible before 'IMMER LIBRARY'
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload);
        },
        markedToFinishList: (state, action) => {
            state.finishedList.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
          // Add user to the state array
          state.discover = action.payload;
          state.status = 'success';
        })

        builder.addCase(fetchBooks.pending, (state, action) => {
            // Add user to the state array
            state.status = 'pending';
        })

        builder.addCase(fetchBooks.rejected, (state, action) => {
            // Add user to the state array
            state.status = 'error';
        })

        //add this is there is any more asynchronous actions
        // builder.addCase(fetchSomethinElse.fulfilled, (state, action) => {
        //     // Add user to the state array
        //     state.discover.push(action.payload)
        //   })
    },
});

// Action creators are generated for each case reducer function
export const { addToReadingList, removeFromReadingList, markedToFinishList } = bookSlice.actions;
export default bookSlice.reducer;