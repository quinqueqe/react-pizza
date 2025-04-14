import React from 'react'
import logo from '../../assets/logo.svg'
import './header.scss'

const Header: React.FC = () => {
  return (
	<div className="header border--header container">
		<div className="header-logo">
			<img src={logo} alt="img" />
			<div>
				<h3>REACT PIZZA</h3>
				<h4>самая вкусная пицца во вселенной</h4>
			</div>
		</div>
		<div className="header-btns">
			<a className='header-btns-price' href="#price">0 ₽</a>
			<a className='header-btns-cart' href="#cart">0</a>
		</div>
	</div>
  )
}

export default Header
