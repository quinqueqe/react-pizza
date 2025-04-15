import React from 'react'
import './errorGetPizzas.scss'

const ErrorItems: React.FC = () => {
	return (
		<div className='errorItems'>
			<h6>
				Произошла ошибка <span>😕</span>
			</h6>
			<h5>Не удалось найти пиццы</h5>
		</div>
	)
}

export default ErrorItems
