import React from 'react'

const Skills = () => {
	return (
		<section className='w-full h-[300px]'>
			<a id='skills' />
			<div className='container relative flex flex-col justify-center items-start h-max w-full select-none pl-[50px] lg:pl-[230px] my-20'>
				<div className='relative'>
					<h1 className='text-white font-[700] text-4xl sm:text-6xl md:text-7xl lg:text-7xl 2xl:text-8xl '>
						Мой Stack
					</h1>
				</div>
				<div className='mt-3'>
					В своей разработке я подбираю для каждого проекта наиболее
					оптимальный стек инструментов. Цель - сократить время разработки не в
					ущерб производительности и функциональности продукта.
				</div>
			</div>
		</section>
	)
}

export default Skills
