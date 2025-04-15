import React from 'react'
import './emptyCart.scss'
import emptyImg from '../../assets/emptyCart.png'
import { Link } from 'react-router-dom'

const EmptyCart: React.FC = () => {
	return (
		<div className='emptyCart border container'>
			<h5>
				Корзина пустая<span>😕</span>
			</h5>
			<p>
				Корзина пустая Вероятней всего, вы не заказывали ещё пиццу. Для того,
				чтобы заказать пиццу, перейди на главную страницу.
			</p>
			<img src={emptyImg} alt='img' />
			<Link to='/'>
				<button>Вернуться назад</button>
			</Link>
		</div>
	)
}

export default EmptyCart
