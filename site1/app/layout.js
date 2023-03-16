'use client'

import React, { useState } from 'react'

import SideBar from '../components/SideBar'
import Footer from '../components/Footer'

import { MdClose } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

import './globals.css'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	weight: ['400', '700'],
	subsets: ['cyrillic', 'latin'],
	variable: '--font-montserrat',
})

export default function RootLayout({ children }) {
	const [menuShow, setMenuShow] = useState(false)

	return (
		<html lang='ru' className={` ${montserrat.className} font-sans bg-main-bg`}>
			<head />
			<body>
				
				{/* Mobile menu */}
				<div
					onClick={() => {
						setMenuShow(!menuShow)
					}}
					className='absolute cursor-pointer top-2 right-2 mbile-menu text-white bg-sidebar-bg p-2 block lg:hidden z-30'
				>
					{menuShow ? (
						<MdClose className='text-4xl' />
					) : (
						<AiOutlineMenu className='text-4xl' />
					)}
				</div>

				<SideBar menuShow={menuShow} />

				{children}

				<Footer />
			</body>
		</html>
	)
}
