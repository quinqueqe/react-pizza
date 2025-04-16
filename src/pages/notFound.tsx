import React from 'react'
import { Link } from 'react-router-dom'

const NotFound: React.FC = () => {
	return (
		<div className='container notFound-cont border'>
			<div className='notFound'>
				<span>😕</span>
				<h1>Ничего не найдено</h1>
				<p>К сожалению данная страница отсутствует в нашем интернет-магазине</p>
				<Link to='/react-pizza' className='notFound-btn'>
					<button>Вернуться на главную страницу</button>
				</Link>
			</div>
		</div>
	)
}

export default NotFound
