//
// Call to action + login buttons
//
'use client'
import { useEffect, useState } from 'react'
import BtnMain from '../components/btn.main'

const CallAction = () => {
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

	const loginBtnBg =
		bgColor === 'white'
			? 'absolute left-1/2 -bottom-[35px] w-1 h-3 bg-white rounded-full shadow-white scale-y-0 group-hover:scale-y-100 transition-transform shadow-md shadow-offset-x-5 shadow-offset-y-5 shadow-gray-800'
			: 'absolute left-1/2 -bottom-[35px] w-1 h-3 bg-btn-bg rounded-full shadow-white scale-y-0 group-hover:scale-y-100 transition-transform shadow-md shadow-offset-x-5 shadow-offset-y-5 shadow-black'

	const ActionBtnBg =
		bgColor === 'white'
			? 'bg-white text-zinc-800 bg-opacity-70 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-80 border-0 shadow-md font-semibold'
			: 'bg-btn-bg text-zinc-800 bg-opacity-90 py-4 px-6 rounded-full cursor-pointer hover:bg-opacity-100 border-0 shadow-md font-semibold'

	return (
		<div className='flex gap-4 items-center text-[14px] 2xl:text-[16px] '>
			<div className='relative group cursor-pointer'>
				Войти
				<div className={loginBtnBg}></div>
			</div>
			<div className={ActionBtnBg}>Подключайтесь — Это бесплатно</div>
		</div>
	)
}

export default CallAction
