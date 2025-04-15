import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchGetPizzasArgs, PizzaBlockType } from './types'

export const fetchGetPizzas = createAsyncThunk<
	PizzaBlockType[],
	fetchGetPizzasArgs
>('items/fetchGetPizzas', async params => {
	const { activeCategories, activeSort, sortDb } = params
	const property = sortDb[activeSort].sortProperty
	const categ = activeCategories > 0 ? activeCategories : ''
	const { data } = await axios.get(
		`https://6759dac0099e3090dbe32341.mockapi.io/items?sortBy=${property}&order=desc&category=${categ}`
	)
	return data
})
