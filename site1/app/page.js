import Hero from '../components/Hero'
import Skills from '../components/Skills'
import Contacts from '../components/Contacts'
import MyPhoto from '../components/MyPhoto'
import MobileMenu from '../components/MobileMenu'

export default function Home() {
	return (
		<main className='text-white font-montserrat'>
			<MobileMenu />
			<Hero />
			<MyPhoto />
			<Skills />
			{/* <Contacts /> */}
		</main>
	)
}
