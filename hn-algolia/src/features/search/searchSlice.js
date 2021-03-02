import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { client } from '../../api/client'

const baseURL = 'https://hn.algolia.com/api/v1/search?query='
const initialState = {
    queries: [],
    status: 'idle',
    error: null,
    results: null,
}

export const submitSearch = createAsyncThunk('search/submitQuery', async action => {
    const response = await client.post(baseURL, action.payload + '/')
    return response // TODO Shape this!
});

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        save: (state, action) => {
            return {
                ...state.queries,
                queries: [...state.queries, action.payload] 
            }
        },
    },
    extraReducers: {
        [submitSearch.pending]: (state, action) => {
            state.status = 'loading'
        },
        [submitSearch.fulfilled]: (state, action) => {
            state.status = 'succeeded'
            state.results = action.payload
        },
        [submitSearch.rejected]: (state, action) => {
            state.status = 'failed'
            state.error = action.payload
        }
    }
});

export const { submit, save } = searchSlice.actions;

export const prevQueries = state => state.search.queries;
export const searchResults = state => state.search.results;
export const searchStatus = state => state.search.status;
export const error = state => state.search.error;

export default searchSlice.reducer;