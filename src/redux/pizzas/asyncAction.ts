import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { FetchGetPizzasArgs, PizzaBlockType } from './types'
import { FetchGetFullPizzaArgs } from '../fullPizza/types'

export const fetchGetPizzas = createAsyncThunk<
	PizzaBlockType[],
	FetchGetPizzasArgs
>('items/fetchGetPizzas', async params => {
	const { activeCategories, activeSort, sortDb, currentPage, valueInput } =
		params
	const property = sortDb[activeSort].sortProperty
	const category = activeCategories > 0 ? `&category=${activeCategories}` : ''
	const page = currentPage
	const search = `&search=${valueInput.trim()}`
	const truf = valueInput.length > 1 ? search : category
	const url = `https://6759dac0099e3090dbe32341.mockapi.io/items?sortBy=${property}&order=desc&page=${page}&limit=4`
	const { data } = await axios.get(`${url}${truf}`)
	return data
})