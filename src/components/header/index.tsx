import React from 'react'
import logo from '../../assets/logo.svg'
import './header.scss'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCart } from '../../redux/cart/selectors'
import { CartItemType } from '../../redux/cart/types'


const Header: React.FC = () => {
	const { totalPrice, items } = useSelector(selectCart)
	const totalCount = items.reduce(
		(sum: number, item: CartItemType) => sum + item.count,
		0
	) 
	return (
		<div className='header border--header container'>
			<Link to='' className='header-logo'>
				<img src={logo} alt='img' />
				<div>
					<h3>REACT PIZZA</h3>
					<h4>самая вкусная пицца во вселенной</h4>
				</div>
			</Link>
			<Link to='cart' className='header-btns'>
				<button className='header-btns-btn header-btns-price'>
					{totalPrice} ₽
				</button>
				<button className='header-btns-btn header-btns-cart'>{totalCount}</button>
			</Link>
		</div>
	)
}

export default Header
