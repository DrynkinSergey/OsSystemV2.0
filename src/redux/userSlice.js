import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
	},
})

export const userReducer = userSlice.reducer
