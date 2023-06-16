'use client'
import { splitArrayIntoGroups } from '@/functions/splitArrayIntoGroups'
import { IPexelsImageResource } from '@/requests/data'
import { useMediaQuery } from 'usehooks-ts'
import { ImageContainer } from './ImageContainer'

interface IPhotoGalleryProps {
    images: IPexelsImageResource[]
}

export const PhotoGallery = ({ images }: IPhotoGalleryProps) => {
    const matches = useMediaQuery('(max-width: 768px)')
    const gridColumns = matches ? 2 : 3

    const arrayImages = splitArrayIntoGroups({
        array: images,
        groupsAmount: gridColumns,
    })

    return (
        <div>
            {arrayImages && (
                <div className='grid gap-6 grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1'>
                    {arrayImages.map(column => (
                        <div
                            key={JSON.stringify(column)}
                            className='flex flex-col gap-6'>
                            {column.map(({ ...props }) => (
                                <ImageContainer key={props.id} {...props} />
                            ))}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
