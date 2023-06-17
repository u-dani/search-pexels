import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { SearchField } from '../SearchField'

export const Header = () => {
    return (
        <header className='sticky z-50 top-0 flex justify-between items-center py-4 px-8 max-md:px-3 gap-6 border-b bg-white'>
            <Logo />
            <div className='w-3/6 min-w-[345px]'>
                <SearchField />
            </div>
            <Navbar />
        </header>
    )
}
