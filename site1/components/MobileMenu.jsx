'use client'

import Link from 'next/link'
import React from 'react'
import { useEffect, useState } from 'react'

// * Icons
import { MdArrowUpward } from 'react-icons/md'
import { FaRegAddressCard, FaWhatsapp, FaRegFilePdf } from 'react-icons/fa'

const MobileMenu = () => {
	const [menuShow, setMenuShow] = useState(false)

	useEffect(() => {
		const showMenu = () => {
			if (window.scrollY >= 700) {
				setMenuShow(true)
			} else {
				setMenuShow(false)
			}
		}

		window.addEventListener('scroll', showMenu)
	})

	return (
		// For only mobile screen
		<div className='block sm:hidden'>
			{/* After scroll */}
			<div
				className={
					menuShow
						? 'fixed bottom-0 w-full h-[80px] bg-inherit z-[20] duration-500'
						: 'fixed -bottom-[100px] w-full h-[80px] bg-inherit z-[20] duration-500'
				}
			>
				<div className='flex items-top justify-between w-full h-full bg-sidebar-bg px-10 shadow-2xl pt-3'>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-tag-color rounded-full text-white'>
							<Link href='#contacts' scroll={false}>
								<FaRegAddressCard size={20} />
							</Link>
						</div>

						<span className='text-[12px] text-white py-1'>Контакты</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-tag-color rounded-full text-white'>
							<Link
								href='https://wa.me/79099929991?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!'
								target='_blank'
							>
								<FaWhatsapp size={20} />
							</Link>
						</div>

						<span className='text-[12px] text-white py-1'>WhatsApp</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-tag-color rounded-full text-white'>
							<Link href='/resumeBogdanchikVA.pdf'>
								<FaRegFilePdf size={20} />
							</Link>
						</div>
						<span className='text-[12px] text-white py-1'>Резюме</span>
					</div>
					<div className='flex flex-col items-center'>
						<div className='w-1/4 flex items-center justify-center w-[40px] h-[40px] bg-tag-color rounded-full text-white'>
							<Link href='#main'>
								<MdArrowUpward size={20} />
							</Link>
						</div>
						<span className='text-[12px] text-white py-1'>Вверх</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MobileMenu
