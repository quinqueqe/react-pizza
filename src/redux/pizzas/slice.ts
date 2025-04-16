import { createSlice } from '@reduxjs/toolkit'
import { fetchGetPizzas } from './asyncAction'
import { PizzasState, Status } from './types'

const initialState: PizzasState = {
	pizzas: [],
	status: Status.LOADING,
}

export const pizzasSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(fetchGetPizzas.pending, state => {
			state.pizzas = []
			state.status = Status.LOADING
		})
		builder.addCase(fetchGetPizzas.fulfilled, (state, action) => {
			state.pizzas = action.payload
			state.status = Status.SUCCESS
		})
		builder.addCase(fetchGetPizzas.rejected, state => {
			state.pizzas = []
			state.status = Status.ERROR
		})
	},
})

export default pizzasSlice.reducer
