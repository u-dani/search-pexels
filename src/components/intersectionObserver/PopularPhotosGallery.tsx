'use client'
import { IPexelsImageResource } from '@/requests/data'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { PhotoGallery } from '../gallery/PhotoGallery'

interface IPopularPhotosGalleryProps {
    initialPhotosArray: IPexelsImageResource[]
}

export const PopularPhotosGallery = ({
    initialPhotosArray,
}: IPopularPhotosGalleryProps) => {
    const [photos, setPhotos] = useState<IPexelsImageResource[]>(
        initialPhotosArray ?? []
    )

    const [currentPage, setCurrentPage] = useState(initialPhotosArray ? 2 : 1)

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            inView && setCurrentPage(state => state + 1)
        },
    })

    useEffect(() => {
        async function requestPhotos() {
            const data = await requestPopularPhotos({ page: currentPage })
            setPhotos(photos?.concat(data))
        }
        requestPhotos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <div>
            {photos && <PhotoGallery images={photos} />}
            <div ref={ref} className='h-10'></div>
        </div>
    )
}
