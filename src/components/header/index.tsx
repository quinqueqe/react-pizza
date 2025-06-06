import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import Search from '../Search'
import { Link, useLocation } from 'react-router-dom'
import { CartItemType, useCart } from '../../store'

const Header: React.FC = () => {
	const items = useCart(state => state.items)
	const totalPrice = useCart(state => state.totalPrice)
	const { pathname } = useLocation()
	const totalCount = items.reduce(
		(sum: number, item: CartItemType) => sum + item.count,
		0
	)
	return (
		<div className='header border--header container'>
			<Link to='/react-pizza' className='header-logo'>
				<img src={logo} alt='img' />
				<div>
					<h3>REACT PIZZA</h3>
					<h4>самая вкусная пицца во вселенной</h4>
				</div>
			</Link>
			{pathname !== '/react-pizza/cart' && pathname !== '/react-pizza/order' ? (
				<>
					<Search />
					<Link to='cart' className='header-btns'>
						<button className='header-btns-btn header-btns-price'>
							{totalPrice} ₽
						</button>
						<button className='header-btns-btn header-btns-cart'>
							{totalCount}
						</button>
					</Link>
				</>
			) : (
				<></>
			)}
		</div>
	)
}

export default Header
