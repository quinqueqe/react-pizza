import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const MainLayout: React.FC = () => {
	return (
		<div className='wrapper'>
			<Header />
			<Outlet />
		</div>
	)
}

export default MainLayout
