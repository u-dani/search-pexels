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
    const [photos, setPhotos] = useState<IPexelsImageResource[] | undefined>(
        initialPhotosArray ?? undefined
    )
    const [currentPage, setCurrentPage] = useState(initialPhotosArray ? 1 : 0)

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            inView && setCurrentPage(state => state + 1)
        },
    })

    useEffect(() => {
        async function requestPhotos() {
            const data = await requestPopularPhotos({ page: currentPage })
            photos ? setPhotos(photos?.concat(data)) : setPhotos(data)
        }
        requestPhotos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <div>
            {photos && <PhotoGallery images={photos} />}
            <span>Buscando mais imagens...</span>
            <div ref={ref} className='h-10'></div>
        </div>
    )
}
