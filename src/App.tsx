import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/home'
import Cart from './pages/cart'
import FullPizza from './pages/fullPizza'
import NotFound from './pages/notFound'
import Order from './pages/order'

const App: React.FC = () => {
	return (
		<Routes>
			<Route path='/' element={<MainLayout />}>
				<Route path='' element={<Home />} />
				<Route path='cart' element={<Cart />} />
				<Route path='pizza/:id' element={<FullPizza />} />
				<Route path='*' element={<NotFound />} />
				<Route path='order' element={<Order />} />
			</Route>
		</Routes>
	)
}

export default App
