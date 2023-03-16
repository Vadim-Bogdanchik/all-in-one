import React from 'react'
import Image from 'next/image'

//* Project imports
import ScrollDown from './ScrollDown'
import photo from '../public/Assets/my_photo.jpg'

const htmlVar1 = '<html>'
const bodyVar1 = '<body>'
const h1Var1 = '<h1>'
const h1Var2 = '<h1 />'
const pVar1 = '<p>'
const pVar2 = '<p />'
const imgT = '<img />'

const Hero = () => {
	return (
		<div>
			<a id='main' />
			{/* top */}
			<div className='maintop absolute top-0 left-0 flex flex-col lg:pl-[130px] pt-[10px] w-full select-none dancing_fnt'>
				<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[10px] md:pl-[20px]'>
					{htmlVar1}
				</span>
				<span className='text-[15px] md:text-2xl from-stone-100 text-tag-color pl-[20px] md:pl-[40px]'>
					{bodyVar1}
				</span>
			</div>

			<ScrollDown />
			<div className='container relative flex flex-col justify-center items-start h-screen w-full select-none pl-[50px] lg:pl-[230px]'>
				<div className='hidden lg:block absolute top-[9%] right-[5%]'>
					<span className='dancing_fnt text-3xl from-stone-100 text-tag-color'>
						{imgT}
					</span>
					<Image src={photo} alt='my photo' height={700} />
				</div>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color'>
					{h1Var1}
				</span>

				<div className='relative'>
					<h1 className='text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl '>
						Привет,
						<br />
						<span className='absolute inline-block text-styled-red transform translate-x-[2rem] sm:translate-x-[3.4rem] md:translate-x-[4rem] 2xl:translate-x-[5.5rem] -z-10'>
							В
						</span>
						Я <span className='text-styled-green'>В</span>адим Богданчик,
						<br />
						Веб-разработчик
					</h1>
				</div>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color mt-[19px]'>
					{h1Var2}
				</span>

				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color my-1'>
					{pVar1}
				</span>
				<p className='text-white text-[14px] md:text-xl z-10 pr-9 t'>
					Full-stack разработчик, стремлюсь создавать качественные и
					производительные приложения. Моя цель - разработка онлайн-сервисов от
					идеи до продакшена используя передовой стек инструментов.
				</p>
				<span className='dancing_fnt text-[15px] md:text-2xl from-stone-100 text-tag-color my-1'>
					{pVar2}
				</span>

				<div className='mt-3'>
					<a href='/resumeBogdanchikVA.pdf' download>
						<button className='relative border-2 font-medium border-styled-green bg-transparent py-2.5 px-5 uppercase text-styled-green transition-colors before:absolute before:left-0 before:top-0 before:-z-10 before:h-full before:w-full before:origin-top-left before:scale-x-0 before:bg-styled-green before:transition-transform before:duration-300 before:content-[` `] hover:text-sidebar-bg before:hover:scale-x-100'>
							Скачать резюме
						</button>
					</a>
				</div>
			</div>
		</div>
	)
}

export default Hero
