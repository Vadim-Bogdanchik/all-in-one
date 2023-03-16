//
// Menu
//

'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
// import { MdArrowDropDown } from 'react-icons/md'

const Menu = () => {
	const [bgColor, setBgColor] = useState('white')

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 60) {
				setBgColor('ppp')
			} else {
				setBgColor('white')
			}
		}

		window.addEventListener('scroll', changeColor)
	})

	const underlineBg =
		bgColor === 'white'
			? 'absolute -bottom-[30px] w-full h-1 bg-white rounded-full shadow-white scale-x-0 group-hover:scale-x-100 transition-transform shadow-md shadow-offset-x-5 shadow-offset-y-5 shadow-gray-800'
			: 'absolute -bottom-[30px] w-full h-1 bg-btn-bg rounded-full shadow-white scale-x-0 group-hover:scale-x-100 transition-transform shadow-md shadow-offset-x-3 shadow-offset-y-2 shadow-black'

	return (
		<nav className='transparent'>
			<ul className='flex gap-10 items-center text-[14px] 2xl:text-[16px] font-semibold'>
				<li className='relative group cursor-pointer border-white'>
					<Link href='/'> Главная</Link>

					<div className={underlineBg}></div>
				</li>
				{/* <li className='flex items-center gap-1 relative group cursor-pointer border-white'>
					Инструменты
					<MdArrowDropDown />
					<div className='absolute -bottom-[28px] w-full h-1 bg-white rounded-full shadow-white scale-x-0 group-hover:scale-x-100 transition-transform shadow-md shadow-offset-x-5 shadow-offset-y-5 shadow-gray-800'></div>
				</li> */}
				<li className='relative group cursor-pointer border-white'>
					<Link href='/school'>Школа промптинга</Link>

					<div className={underlineBg}></div>
				</li>
				<li className='relative group cursor-pointer border-white'>
					<Link href='/blog'>Блог</Link>

					<div className={underlineBg}></div>
				</li>
				<li className='relative group cursor-pointer border-white'>
					<Link href='/price'>Цены</Link>

					<div className={underlineBg}></div>
				</li>
			</ul>
		</nav>
	)
}

export default Menu
