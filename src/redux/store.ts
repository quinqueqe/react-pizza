import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage

import filter from './filter/slice'
import pizzas from './pizzas/slice'
import cart from './cart/slice'
import fullPizza from './fullPizza/slice'

const persistConfig = {
	key: 'root', // Ключ для сохранения состояния
	storage, // Хранилище (localStorage по умолчанию)
	// whitelist: ['cart', 'fullPizza', 'pizzas']
}

const rootReducer = combineReducers({
	filter,
	pizzas,
	cart,
	fullPizza,
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
	reducer: persistedReducer,
})

export const persistor = persistStore(store)
