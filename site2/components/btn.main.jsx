import React from 'react'

const BtnMain = ({text}) => {
	return (
		<div className='bg-btn-bg text-zinc-800 bg-opacity-90 py-3 px-5 rounded-full cursor-pointer hover:bg-opacity-100 border-0 shadow-md'>
			{text}
		</div>
	)
}

export default BtnMain