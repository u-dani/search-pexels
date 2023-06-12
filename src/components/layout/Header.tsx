import { Logo } from '../Logo'
import { Navbar } from '../Navbar'
import { SearchField } from '../SearchField'

export const Header = () => {
    return (
        <header className='flex justify-between items-center py-4 px-8 max-md:px-3 gap-6'>
            <Logo />
            <div className='w-3/6 min-w-[345px]'>
                <SearchField />
            </div>
            <Navbar />
        </header>
    )
}
