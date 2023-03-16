import { AiOutlineArrowDown } from 'react-icons/ai'

const ScrollDown = () => {
	return (
		<div className='absolute flex flex-col w-max items-center justify-center right-1 bottom-2 md:bottom-7 text-white z-1'>
			<div className='animate-bounce w-[30px]'>
				<div className='transform rotate-90'>
					<p className='trasfom -translate-x-[80%] text-[12px] md:text-[14px] w-max'>
						прокрути вниз
					</p>
				</div>
			</div>

			<AiOutlineArrowDown />
		</div>
	)
}

export default ScrollDown
