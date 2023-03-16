import React from 'react'
import Image from 'next/image'
import photo from '../public/Assets/my_photo.jpg'

const imgT = '<img />'

const MyPhoto = () => {
	return (
		<div className='block md:hidden container relative flex flex-col justify-center items-start h-max w-full select-none pl-[50px] lg:pl-[230px] py-16'>
			<span className='dancing_fnt text-xl from-stone-100 text-tag-color'>
				{imgT}
			</span>
			<Image src={photo} alt='my photo' />
		</div>
	)
}

export default MyPhoto
