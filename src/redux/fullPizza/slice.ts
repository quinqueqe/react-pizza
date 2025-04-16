import { createSlice } from '@reduxjs/toolkit'
import { FullPizzaState, FullPizzaStatus } from './types'
import { fetchGetFullPizza } from './asyncAction'

const initialState: FullPizzaState = {
	pizza: [],
	status: FullPizzaStatus.LOADING
}

export const fullPizzaSlice = createSlice({
	name: 'fullPizza',
	initialState,
	reducers: {
	},
	extraReducers: builder => {
		builder.addCase(fetchGetFullPizza.pending, (state, action) => {
			state.pizza = []
			state.status = FullPizzaStatus.LOADING
		})
		builder.addCase(fetchGetFullPizza.fulfilled, (state, action) => {
			state.pizza = action.payload
			state.status = FullPizzaStatus.SUCCESS
		})
		builder.addCase(fetchGetFullPizza.rejected, (state, action) => {
			state.pizza = []
			state.status = FullPizzaStatus.ERROR
		})
	},
})

export default fullPizzaSlice.reducer
