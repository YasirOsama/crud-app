import { createSlice, createAsyncThunk, isRejectedWithValue } from '@reduxjs/toolkit';

// create async thunk to create a user
export const createUser = createAsyncThunk('userDetail/createUser', async (data) => {
    try {
        const response = await fetch('https://6625e902052332d55320fec5.mockapi.io/crud-app', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error('Failed to create user');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        throw error;
    }
});

// create async thunk to fetch users
export const showUsers = createAsyncThunk('showUsers', async () => {
    try {
        const response = await fetch('https://6625e902052332d55320fec5.mockapi.io/crud-app');
        if (!response.ok) {
            throw new Error('Failed to fetch users');
        }
        const result = await response.json();
        return result;
    } catch (error) {
        return isRejectedWithValue(error.message);
    }
});

// create slice
export const userDetail = createSlice({
    name: 'userDetail',
    initialState: {
        users: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error state when starting request
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.loading = false;
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(showUsers.pending, (state) => {
                state.loading = true;
                state.error = null; // Reset error state when starting request
            })
            .addCase(showUsers.fulfilled, (state, action) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(showUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload; // Here, action.payload contains the error message
            });
    },
});

export default userDetail.reducer;
