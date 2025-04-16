import React from 'react'
import './Header.scss'
import logo from '../../assets/logo.svg'
import Search from '../Search'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import { selectCart } from '../../redux/cart/selectors'
import { CartItemType } from '../../redux/cart/types'

const Header: React.FC = () => {
	const { totalPrice, items } = useSelector(selectCart)
	const { pathname } = useLocation()
	const totalCount = items.reduce(
		(sum: number, item: CartItemType) => sum + item.count,
		0
	)
	return (
		<div className='header border--header container'>
			<Link to='' className='header-logo'>
				<img src={logo} alt='img' />
				<div>
					<h3>REACT PIZZA V2</h3>
					<h4>самая вкусная пицца во вселенной</h4>
				</div>
			</Link>
			{pathname !== '/cart' && pathname !== '/order' ? (
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
