//
// Logo
//
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

// import { MuseoModerno } from 'next/font/google'

// const museomoderno = MuseoModerno({
// 	weight: '400',
// 	subsets: ['latin'],
// 	variable: '--font-museomoderno',
// })

const Logo = () => {
	return (
		<div className='flex items-center gap-3 cursor-pointer'>
			<Image
				// loader={myLoader}
				src='/images/mlogo1.png'
				alt='Picture of the author'
				width={40}
				height={40}
			/>
			<Link href='/' className='flex items-start gap-2'>
				<p className='font-museomoderno text-4xl'>Mielofon</p>
				<p className='text-[14px] font-extrabold bg-gradient-to-r text-transparent bg-clip-text animate-gradient'>
					MVP
				</p>
			</Link>
		</div>
	)
}

export default Logo
