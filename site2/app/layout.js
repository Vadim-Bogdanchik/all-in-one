import Topbar from '../components/topbar'
import Footer from '../components/footer'

import { Montserrat } from '@next/font/google'
import { MuseoModerno } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	variable: '--montserrat-font',
})
const museomoderno = MuseoModerno({
	subsets: ['latin'],
	variable: '--museomoderno-font',
})

export default function RootLayout({ children }) {
	return (
		<html
			lang='ru'
			className={`${montserrat.variable} ${museomoderno.variable}`}
		>
			<head />
			<body className='select-none'>
				<Topbar />
				{children}
				<Footer />
			</body>
		</html>
	)
}
