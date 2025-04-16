import React from 'react'
import orderimg from '../assets/order.png'
import { Link } from 'react-router-dom'

const Order: React.FC = () => {
	const random = Math.round(Math.random() * 1000)
	return (
		<div className='order container border'>
			<div className='empty container '>
				<div className='empty__content'>
					<img src={orderimg} alt='img' />
					<h2 className='empty__content-title'>Заказ оформлен!</h2>
					<h5 className='empty__content-desc'>{`Заказ #${random} скоро будет передан`}</h5>
					<h5 className='empty__content-desc'>курьерской доставке'</h5>
					<Link to='/react-pizza' className='empty-btn'>
						Вернуться назад
					</Link>
				</div>
			</div>
		</div>
	)
}

export default Order
