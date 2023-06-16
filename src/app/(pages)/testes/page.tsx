'use client'
import { Button } from '@/components/Button'
import { Select } from '@/components/Select'
import { Title } from '@/components/Title'
import { ColorParameterFilter } from '@/components/gallery/ColorParameterFilter'
import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { OrientationParameterFilter } from '@/components/gallery/OrientationParameterFilter'
import Link from 'next/link'
import { IoFilter } from 'react-icons/io5'

export default function Testes() {
    const reg = /[^A-Fa-f0-9]/g
    const str = '##787#7fff'
    const re = str.replaceAll(reg, '')

    return (
        <main className='flex flex-col gap-4'>
            <NavbarGallery
                photoLinkButtonProps={{ href: '', dark: true }}
                videoLinkButtonProps={{ href: '' }}
            />
        </main>
    )
}
