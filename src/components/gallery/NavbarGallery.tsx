'use client'
import Link from 'next/link'
import { Button } from '../Button'
import { IButtonProps } from '../Button'
import { IoFilter } from 'react-icons/io5'
import {
    IOrientationParameterFilterProps,
    OrientationParameterFilter,
} from './OrientationParameterFilter'
import {
    ColorParameterFilter,
    IColorParameterFilterProps,
} from './ColorParameterFilter'
import { useState } from 'react'

interface ILinkButtonProps extends Partial<IButtonProps> {
    href: string
}

interface INavbarGalleryProps {
    photoLinkButtonProps: ILinkButtonProps
    videoLinkButtonProps: ILinkButtonProps
    orientationParameterFilter?: IOrientationParameterFilterProps
    colorParameterFilter?: IColorParameterFilterProps
}

export const NavbarGallery = ({
    photoLinkButtonProps,
    videoLinkButtonProps,
    orientationParameterFilter,
    colorParameterFilter,
}: INavbarGalleryProps) => {
    const [toggleFilterDisplay, setToggleFilterDisplay] = useState(false)

    return (
        <div className='flex flex-col gap-8'>
            <div className='flex justify-between'>
                <div className='flex gap-4 w-[250px] max-md:w-[100px]'>
                    <Button {...photoLinkButtonProps} full pill>
                        <Link href={photoLinkButtonProps.href}>Fotos</Link>
                    </Button>
                    <Button {...videoLinkButtonProps} full pill>
                        <Link href={videoLinkButtonProps.href}>Vídeos</Link>
                    </Button>
                </div>

                <Button
                    border
                    handleClick={() => {
                        setToggleFilterDisplay(state => !state)
                    }}>
                    <span className='flex gap-2 items-center'>
                        <IoFilter className='text-lg' />
                        <span>Filtros</span>
                    </span>
                </Button>
            </div>

            {toggleFilterDisplay && (
                <div className='grid grid-cols-3 gap-4'>
                    {orientationParameterFilter && (
                        <OrientationParameterFilter
                            {...orientationParameterFilter}
                        />
                    )}
                    {colorParameterFilter && (
                        <ColorParameterFilter {...colorParameterFilter} />
                    )}
                </div>
            )}
        </div>
    )
}
