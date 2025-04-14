import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchGetPizzas = createAsyncThunk(
	'items/fetchGetPizzas',
	async () => {
		const { data } = await axios.get(
			'https://6759dac0099e3090dbe32341.mockapi.io/items'
		)
		return data
	}
)
