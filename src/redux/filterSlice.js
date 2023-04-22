import { createSlice } from '@reduxjs/toolkit'

const filterSlice = createSlice({
	name: 'filter',
	initialState: {
		filter: 'default',
	},
	reducers: {
		setFilter(state, { payload }) {
			state = payload
		},
	},
})

export const filterReducer = filterSlice.reducer
export const { setFilter } = filterSlice.actions
