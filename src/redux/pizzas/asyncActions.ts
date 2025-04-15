import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { fetchGetPizzasArgs, PizzaBlockType } from './types'

export const fetchGetPizzas = createAsyncThunk<
	PizzaBlockType[],
	fetchGetPizzasArgs
>('items/fetchGetPizzas', async params => {
	const { activeCategories, activeSort, sortDb, currentPage, valueInput } =
		params
	const property = sortDb[activeSort].sortProperty
	const categ = activeCategories > 0 ? `&category=${activeCategories}` : ''
	const page = currentPage
	const search = `&search=${valueInput.trim()}`
	const truf = valueInput.length > 1 ? search : categ
	const url = `https://6759dac0099e3090dbe32341.mockapi.io/items?sortBy=${property}&order=desc&page=${page}&limit=4`
	const { data } = await axios.get(`${url}${truf}`)
	return data
})
