import { createSlice } from '@reduxjs/toolkit';
import books from '../../fakeData/books.json';

const bookSlice = createSlice({
    name: 'book',
    initialState: {
        discover: books,
        readingList: [],
        finishedList: [],
    },
    reducers: {
        addToReadingList: (state, action) => {
            state.readingList.push(action.payload);   //here we are mutating directly which wasn't possible before 'IMMER LIBRARY'
        },
        removeFromReadingList: (state, action) => {
            state.readingList = state.readingList.filter(book => book.id !== action.payload);
        },
    },
})