'use client'
import Link from 'next/link'
import { useState } from 'react'
import { BsGithub } from 'react-icons/bs'
import { IoMenu } from 'react-icons/io5'

interface INavbarProps {
    white?: boolean
}

export const Navbar = (props: INavbarProps) => {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <nav className='relative'>
            <IoMenu
                className={`text-3xl duration-150 hover:opacity-70 ease-in-out md:hidden cursor-pointer ${
                    props.white && 'text-white'
                }`}
                onClick={() => {
                    setShowMenu(state => !state)
                }}
            />

            <ul
                className={`z-50 rounded flex gap-x-6 gap-y-4 items-center font-medium right-0 ${
                    props.white ? 'text-white' : 'text-neutral-800'
                } ${
                    showMenu
                        ? 'max-md:flex-col max-md:absolute max-md:bg-white max-md:mt-2 max-md:border max-md:p-4 max-md:text-neutral-800'
                        : 'hidden'
                } md:flex`}>
                <li>
                    <Link
                        href='popular'
                        className='duration-150 hover:opacity-75 ease-in-out'>
                        Destaques
                    </Link>
                </li>
                <li>
                    <Link
                        href='https://github.com/u-dani/search-pexels'
                        target='_blank'
                        className='duration-150 hover:opacity-70 ease-in-out'>
                        <abbr
                            title='Ver código no Github'
                            className='flex items-center gap-1 no-underline'>
                            <BsGithub className='text-xl' />
                            <span>Github</span>
                        </abbr>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
