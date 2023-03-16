//
// Hero section
//

import React from 'react'
import SocialLinks from '../social.links'

const Hero = () => {
	return (
		<section className='flex flex-col items-center justify-center bg_hero bg-cover bg-center h-screen w-full text-white'>
			<div className='text-center text-6xl font-extrabold w-[65%] uppercase'>
				Фантастический AI-сервис помогающий легко и быстро создавать текстовый
				контент
			</div>

			<div className='text-[18px] bg-white bg-opacity-70 text-zinc-800 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-80 transition-colors font-semibold mt-16 mb-2 shadow-xl'>
				Попробовать бесплатно
			</div>

			<SocialLinks />
		</section>
	)
}

export default Hero
