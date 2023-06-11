import Image from 'next/image'
import Link from 'next/link'
import LogoPexels from 'public/logo-pexels.png'

interface ILogoProps {
    white?: boolean
    iconOnly?: boolean
}

export const Logo = (props: ILogoProps) => {
    return (
        <Link
            href='https://www.pexels.com/pt-br/'
            target='_blank'
            className='cursor-pointer hover:opacity-80 duration-150 ease-in-out'>
            <span className='w-max flex flex-row gap-2 justify-between items-center min-w-fit'>
                <Image
                    src={LogoPexels}
                    alt='Logo do Pexels'
                    width={40}
                    height={40}
                />
                {!props.iconOnly && (
                    <span
                        className={`text-2xl font-medium max-md:hidden ${
                            props.white && 'text-white'
                        }`}>
                        Pexels
                    </span>
                )}
            </span>
        </Link>
    )
}
