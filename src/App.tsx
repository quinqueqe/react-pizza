import React from 'react'
import Header from './components/header'
import Home from './pages/home'

const App: React.FC = () => {
  return (
	<div className="wrapper">
		<Header />
		<Home/>
	</div>
  )
}

export default App
