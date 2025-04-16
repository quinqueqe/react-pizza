import { createAsyncThunk } from '@reduxjs/toolkit'
import { PizzaBlockType } from '../pizzas/types'
import { FetchGetFullPizzaArgs } from './types'
import axios from 'axios'

export const fetchGetFullPizza = createAsyncThunk<
	PizzaBlockType[],
	FetchGetFullPizzaArgs
>('items/fetchGetFullPizza', async params => {
	const { id } = params
	const { data } = await axios.get(
		`https://6759dac0099e3090dbe32341.mockapi.io/items/${id}`
	)
	return data
})