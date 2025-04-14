import React from 'react'
import ContentLoader from 'react-content-loader'

const Skeleton: React.FC = () => (
	<ContentLoader
		speed={2}
		width={295}
		height={520}
		viewBox='0 0 295 520'
		backgroundColor='#cfcfcf'
		foregroundColor='#ffffff'
	>
		<rect x='14' y='0' rx='170' ry='170' width='270' height='270' />
		<rect x='34' y='300' rx='5' ry='5' width='230' height='23' />
		<rect x='0' y='342' rx='20' ry='20' width='295' height='93' />
		<rect x='0' y='475' rx='10' ry='10' width='98' height='32' />
		<rect x='130' y='465' rx='30' ry='30' width='166' height='54' />
	</ContentLoader>
)

export default Skeleton
