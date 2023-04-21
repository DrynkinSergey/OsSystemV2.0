import { createSlice } from '@reduxjs/toolkit'
import { fetchStatus } from './operations'

const userSlice = createSlice({
	name: 'users',
	initialState: {
		users: [],
		loading: false,
		error: null,
	},
	reducers: {
		removeUser(state, { payload }) {
			const userIndex = state.users.findIndex(user => user.id === payload)
			state.users.splice(userIndex, 1)
		},
	},
	extraReducers: {
		[fetchStatus.pending](state) {
			state.loading = true
		},
		[fetchStatus.rejected](state, { payload }) {
			state.loading = false
			state.error = payload
		},
		[fetchStatus.fulfilled](state, { payload }) {
			state.users.push(payload)
			state.loading = false
			state.error = null
		},
	},
})

export const userReducer = userSlice.reducer
export const { addUser, removeUser } = userSlice.actions
