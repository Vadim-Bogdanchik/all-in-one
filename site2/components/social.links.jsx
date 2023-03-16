import React from 'react'
import Link from 'next/link'
// Icons
import { FaVk, FaTelegramPlane } from 'react-icons/fa'

const SocialLinks = () => {
	return (
		<div className='absolute top-0 left-0 h-full w-24 flex flex-col gap-3 items-center justify-center'>
			<div className='bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer '>
				<Link href='#'>
					<FaTelegramPlane />
				</Link>
			</div>
			<div className=' bg-gradient-to-tr from-footer-g1 via-footer-g2 to-footer-g3 p-2 rounded-xl cursor-pointer'>
				<Link href='#'>
					<FaVk />
				</Link>
			</div>
		</div>
	)
}

export default SocialLinks