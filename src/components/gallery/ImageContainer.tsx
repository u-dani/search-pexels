'use client'
import Link from 'next/link'
import Image from 'next/image'
import { IPexelsImageResource } from '@/requests/data'
import { saveAs } from 'file-saver'
import { FiDownload } from 'react-icons/fi'

export const ImageContainer = ({
    src,
    alt,
    photographer,
    photographer_url,
    url,
}: IPexelsImageResource) => {
    const downloadImage = () => {
        saveAs(src.medium, alt)
    }

    return (
        <div className='bg-gray-300 cursor-pointer relative group'>
            <Image
                src={src.original}
                alt={alt}
                width={0}
                height={0}
                sizes='30vw'
                quality={80}
                placeholder='empty'
                priority={true}
                className='w-full h-auto'
            />

            <span className='group-hover:block hidden absolute top-0 left-0 bg-black w-full h-full opacity-20'></span>

            <Link
                href={url}
                target='_blank'
                className='w-full h-full absolute top-0 left-0'></Link>

            <div className='group-hover:flex hidden absolute bottom-4 left-0  justify-between items-center w-full px-4 gap-2'>
                <Link href={photographer_url} target='_blank'>
                    <span className='leading-6 text-white text-xl max-md:text-lg hover:underline'>
                        {photographer}
                    </span>
                </Link>
                <button
                    onClick={downloadImage}
                    className='text-xl p-2 bg-white rounded hover:opacity-80'>
                    <FiDownload className='text-gray-800' />
                </button>
            </div>
        </div>
    )
}
