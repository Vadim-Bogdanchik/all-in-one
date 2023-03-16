import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const Helps = () => {
	let texts = [
		'маркетинговым агенствам',
		'рекламным агенствам',
		'владельцам бизнеса',
		'smm спецалистам',
		'стартапам',
	]

	const [currentText, setCurrentText] = useState('')
	const [visible, setVisible] = useState(false)
	const [currentIdx, setCurrentIdx] = useState(0)
	const { ref, inView } = useInView({ threshold: 0.5 })

	useEffect(() => {
		let timer

		if (inView) {
			setVisible(true)
			const currentTextArr = texts[currentIdx].split('')
			setCurrentText('')

			currentTextArr.forEach((char, idx) => {
				timer = setTimeout(() => {
					setCurrentText(prev => prev + char)
				}, 100 * idx)
			})
		} else {
			setVisible(false)
		}

		return () => clearTimeout(timer)
	}, [inView, currentIdx])

	useEffect(() => {
		if (currentText === texts[currentIdx]) {
			const timer = setTimeout(() => {
				setCurrentIdx(prev => (prev + 1) % texts.length)
			}, 2000)

			return () => clearTimeout(timer)
		}
	}, [currentText, currentIdx, texts.length])

	return (
		<section>
			<div className='flex flex-col items-center justify-start w-full text-6xl text-center h-[750px] mt-28 '>
				<div className='flex flex-col items-center bg_help bg-opacity-50 bg-cover bg-center py-14 font-bold w-[96%] rounded-3xl'>
					<div>Mielofon поможет</div>

					<div className='text-black text-[60px] font-extrabold bg-gradient-to-tr text-transparent bg-clip-text animate-gradient-help'>
						<p ref={ref} style={{ opacity: visible ? 1 : 0 }}>
							{currentText}
						</p>
					</div>

					<div className='text-xl mt-10 font-normal w-[40%]'>
						{/* Достигните лучших результатов быстрее - воспользуйтесь нашим инструментом для написания текстов, который не оставит вас равнодушным. */}
						Увеличивайте свою эффективность в написании текстов и добивайтесь
						лучших результатов за меньшее время с помощью нашего инструмента,
						разработанного на основе нейронных сетей.
					</div>

					<div className='flex gap-5 w-full py-10 px-6 text-xl font-normal'>
						<div className='flex flex-col items-center rounded-3xl w-1/3 border py-2 px-4'>
							qeq
						</div>
						<div className='flex flex-col items-center rounded-3xl w-1/3 border py-2 px-4'>
							{' '}
						</div>
						<div className='flex flex-col items-center rounded-3xl w-1/3 border py-2 px-4'>
							{' '}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Helps
