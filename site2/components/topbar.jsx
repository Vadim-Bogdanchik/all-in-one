//
// Top bar
//

'use client'
import { useEffect, useState } from 'react'

// Components
import Logo from './logo'
import Menu from './menu'
import CallAction from './call.action'

const Topbar = () => {
	const [navColor, setNavColor] = useState('transparent')
	const [navText, setNavText] = useState('white')

	useEffect(() => {
		const changeColor = () => {
			if (window.scrollY >= 60) {
				setNavColor('white')
				setNavText('black')
			} else {
				setNavColor('transparent')
				setNavText('white')
			}
		}

		window.addEventListener('scroll', changeColor)
	})

	return (
		<div
			style={{ backgroundColor: `${navColor}`, color: `${navText}` }}
			className='fixed top-0 left-0 flex items-end justify-center w-full h-[90px] border-b-[1px] border-white border-opacity-20 px-20 select-none transition-colors font-montserrat'
		>
			<div className='flex items-center justify-between w-full h-max pb-3'>
				<Logo />
				<Menu />
				<CallAction />
			</div>
		</div>
	)
}

export default Topbar
