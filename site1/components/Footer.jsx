import React from 'react'

const htmlVar2 = '<html />'
const bodyVar2 = '<body />'

const Footer = () => {
	return (
		<div className='maintop flex flex-col lg:pl-[130px] pb-[10px] w-full select-none dancing_fnt'>
			<span className='text-2xl from-stone-100 text-tag-color pl-[20px]  md:pl-[40px]'>
				{bodyVar2}
			</span>
			<span className='text-2xl from-stone-100 text-tag-color pl-[10px] md:pl-[20px]'>
				{htmlVar2}
			</span>
		</div>
	)
}

export default Footer
