import Image from 'next/image'
import LogoPexels from 'public/logo-pexels.png'

interface ILogoProps {
    white?: boolean
    iconOnly?: boolean
}

export const Logo = (props: ILogoProps) => {
    return (
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
    )
}
