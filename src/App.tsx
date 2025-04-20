import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import FullPizza from './pages/FullPizza'
import NotFound from './pages/NotFound'
import Order from './pages/Order'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/react-pizza' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='/react-pizza/cart' element={<Cart />} />
				<Route path='/react-pizza/pizza/:id' element={<FullPizza />} />
				<Route path='*' element={<NotFound />} />
				<Route path='/react-pizza/order' element={<Order />} />
			</Route>
		</Routes>
	)
}

export default App
