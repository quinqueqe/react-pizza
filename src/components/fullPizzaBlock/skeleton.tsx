import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={420}
		height={590}
		viewBox='0 0 420 590'
		backgroundColor='#cfcfcf'
		foregroundColor='#ffffff'
	>
		<rect x='45' y='0' rx='170' ry='170' width='350' height='350' />
		<rect x='100' y='360' rx='5' ry='5' width='230' height='23' />
		<rect x='65' y='400' rx='20' ry='20' width='300' height='93' />
		<rect x='10' y='530' rx='10' ry='10' width='98' height='32' />
		<rect x='250' y='515' rx='30' ry='30' width='172' height='60' />
	</ContentLoader>
)

export default Skeleton
