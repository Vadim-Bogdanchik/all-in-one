//
// Main page
//

'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import Hero from '../components/sectionsHero/hero'
import Helps from '../components/sectionsHero/helps'
import HowItWorks from '../components/sectionsHero/how.it.works'
import GetRedy from '../components/sectionsHero/get.rady'

// Styles global
import './globals.css'

export default function Home() {
	const { pathname } = useRouter()

	// Прокрутка в начало сайта при обновлении страницы
	useEffect(() => {
		window.scrollTo(0, 0)
	}, [pathname])

	return (
		<main className='font-montserrat'>
			<Hero />
			<HowItWorks />
			<Helps />
			<GetRedy />
		</main>
	)
}
