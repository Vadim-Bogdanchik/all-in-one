import React from 'react'
import Link from 'next/link'
import { AiOutlineWhatsApp, AiFillGithub } from 'react-icons/ai'
import { SlSocialVkontakte } from 'react-icons/sl'



const SideBar = ({ menuShow }) => {
	return (
		<div>
			{/* Mobile menu container */}
			<div
				className={
					menuShow
						? 'lg:hidden overflow-hidden flex flex-col items-center justify-between left-0 z-20 top-0 w-full h-screen fixed bg-sidebar-bg text-white transition-all z-10'
						: 'overflow-hidden -left-[100%] z-199 top-0 w-full h-screen absolute bg-sidebar-bg text-white transition-all '
				}
			>
				<div className='w-full h-[200px] bg-black flex flex-col items-center justify-center'>
					<div className='relative logo cursor-pointer h-max w-max'>
						<div className='flex items-center justify-center text-8xl font-bold'>
							<span className=' text-styled-green z-20'>В</span>
							<span className='absolute inline-block text-styled-red transform -translate-x-[0.4rem] z-19'>
								В
							</span>
						</div>
						<div className='font-bold text-4xl'>
							<p>Вадим</p>
						</div>
					</div>
					<div className='text-sm font-thin py-5'>
						<p>Web Developer</p>
					</div>
				</div>

				<div className='nav w-full h-max duration-500'>
					<ul className='text-center text-p-color text-2xl'>
						<li className='py-5 border-t border-tag-color '>
							<Link
								className='font-medium text-white duration-200 hover:text-styled-green'
								href='#main'
								scroll={false}
								onClick={() => {
									setMenuShow(!menuShow)
								}}
							>
								Главная
							</Link>
						</li>
						<li className='py-5 border-t border-tag-color'>
							<Link
								className='font-medium text-white duration-200 hover:text-styled-green'
								href='#pet'
								scroll={false}
								onClick={() => {
									setMenuShow(!menuShow)
								}}
							>
								Мой <span className='font-extrabold'>Pet</span>
							</Link>
						</li>
						<li className='py-5 border-t border-tag-color'>
							<Link
								className='font-medium text-white duration-200 hover:text-styled-green'
								href='#skills'
								scroll={false}
								onClick={() => {
									setMenuShow(!menuShow)
								}}
							>
								Мой <span className='font-extrabold'>Stack</span>
							</Link>
						</li>
						<li className='py-5 border-y border-tag-color'>
							<Link
								className='font-medium text-white duration-200 hover:text-styled-green'
								href='#contacts'
								scroll={false}
								onClick={() => {
									setMenuShow(!menuShow)
								}}
							>
								Контакты
							</Link>
						</li>
					</ul>
				</div>

				<div className='footer flex gap-3 items-center justify-center pb-[30px] text-3xl text-p-color'>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link
							href='https://wa.me/79099929991?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!'
							target='_blank'
						>
							<AiOutlineWhatsApp />
						</Link>
					</span>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link href='https://github.com/Vadim-Bogdanchik'>
							<AiFillGithub />
						</Link>
					</span>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link href='https://vk.com/id3017808' target='_blank'>
							<SlSocialVkontakte />
						</Link>
					</span>
				</div>
			</div>

			{/* Desktop menu */}
			<div className='desktop-menu fixed hidden lg:block top-0 left-0 lg:flex flex-col justify-between bg-sidebar-bg text-gray-50 h-screen w-[130px] select-none z-20'>
				<div className='top h-[200px] bg-black flex flex-col items-center justify-center'>
					<div className='logo cursor-pointer h-max w-max'>
						<div className='flex items-center justify-center text-8xl font-bold'>
							<span className=' text-styled-green z-20'>В</span>
							<span className='absolute inline-block text-styled-red transform -translate-x-[0.4rem] z-19'>
								В
							</span>
						</div>
						<div className='font-bold text-3xl'>
							<p>Вадим</p>
						</div>
					</div>
					<div className='text-sm font-thin py-5'>
						<p>Web Developer</p>
					</div>
				</div>
				<div className='nav w-full h-max'>
					<ul className='text-center text-p-color text-lg duration-500'>
						<Link
							className='group font-medium duration-200 hover:text-styled-green'
							href='#main'
							scroll={false}
						>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
							<li className='py-5 cursor-pointer border-t border-tag-color'>
								Главная
							</li>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
						</Link>
						<Link
							className='group font-medium duration-200 hover:text-styled-green'
							href='#skills'
							scroll={false}
						>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
							<li className='py-5 cursor-pointer border-t border-tag-color'>
								Мой <span className='font-bold'>Pet</span>
							</li>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
						</Link>
						<Link
							className='group font-medium duration-200 hover:text-styled-green'
							href='#skills'
							scroll={false}
						>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
							<li className='py-5 cursor-pointer border-t border-tag-color'>
								Мой <span className='font-bold'>Stack</span>
							</li>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
						</Link>
						<Link
							className='group font-medium duration-200 hover:text-styled-green'
							href='#contacts'
							scroll={false}
						>
							<div className='relative w-full h-0.5 bg-teal-500 translate-y-0.5 scale-x-0 group-hover:scale-x-100 transition-transform' />
							<li className='py-5 cursor-pointer border-y border-tag-color'>
								Контакты
							</li>
							<div className='relative w-full h-0.5 bg-teal-500 scale-x-0 group-hover:scale-x-100 transition-transform' />
						</Link>
					</ul>
				</div>
				<div className='footer flex gap-3 items-center justify-center pb-[130px] text-xl text-p-color'>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link
							href='https://wa.me/79099929991?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!'
							target='_blank'
						>
							<AiOutlineWhatsApp />
						</Link>
					</span>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link href='https://github.com/Vadim-Bogdanchik' target='_blank'>
							<AiFillGithub />
						</Link>
					</span>
					<span className='cursor-pointer hover:text-styled-green'>
						<Link href='https://vk.com/id3017808' target='_blank'>
							<SlSocialVkontakte />
						</Link>
					</span>
				</div>
			</div>
		</div>
	)
}

export default SideBar