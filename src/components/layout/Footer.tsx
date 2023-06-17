import Link from 'next/link'
import { Button } from '../Button'

export const Footer = () => {
    return (
        <div className='bg-black text-white px-8 max-md:px-3 py-8 text-center flex flex-col gap-4'>
            <span>
                ✨ Projeto criado com Nextjs + React, Taiwind e Typescript ✨
            </span>
            <div className='flex justify-center gap-4'>
                <Button border>
                    <Link
                        className='text-white'
                        href='https://www.pexels.com/pt-br/'
                        target='_blank'>
                        Visite o Pexels
                    </Link>
                </Button>

                <Button border>
                    <Link
                        className='text-white'
                        href='https://github.com/u-dani/search-pexels'
                        target='_blank'>
                        Ver código no Github
                    </Link>
                </Button>
            </div>
        </div>
    )
}
