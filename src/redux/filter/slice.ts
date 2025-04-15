import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FilterState } from './types'

const initialState: FilterState = {
	activeCategories: 0,
	activeSort: 0,
	popup: false,
	currentPage: 1,
}

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		setActiveCategories(state, action: PayloadAction<number>) {
			state.activeCategories = action.payload
		},
		setActiveSort(state, action: PayloadAction<number>) {
			state.activeSort = action.payload
		},
		setPopup(state, action: PayloadAction<boolean>) {
			state.popup = action.payload
		},
		setCurrentPage(state, action: PayloadAction<number>) {
			state.currentPage = action.payload
		},
	},
})

export const { setActiveCategories, setActiveSort, setPopup, setCurrentPage } =
	filterSlice.actions
export default filterSlice.reducer
