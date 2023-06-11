import Link from 'next/link'
import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { SearchField } from '../SearchField'

export const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-6 gap-6 max-md:px-3'>
            <Link
                href='https://www.pexels.com/pt-br/'
                target='_blank'
                className='cursor-pointer hover:opacity-80 duration-150 ease-in-out'>
                <Logo />
            </Link>
            <div className='w-3/6 min-w-[345px]'>
                <SearchField />
            </div>
            <Navbar />
        </header>
    )
}
