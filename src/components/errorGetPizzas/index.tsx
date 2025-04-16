import React from 'react'
import './ErrorGetPizzas.scss'

const ErrorGetPizzas: React.FC = () => {
	return (
		<div className='errorItems'>
			<h6>
				Произошла ошибка <span>😕</span>
			</h6>
			<h5>Не удалось найти пиццы</h5>
		</div>
	)
}

export default ErrorGetPizzas
