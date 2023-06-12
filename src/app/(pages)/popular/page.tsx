/* eslint-disable react-hooks/exhaustive-deps */
'use client'
import { ImageContainer } from '@/components/gallery/ImageContainer'
import { PhotoGallery } from '@/components/gallery/PhotoGallery'
import { IPexelsImageResource } from '@/requests/data'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default function PopularPhotosPage() {
    const [photos, setPhotos] = useState<IPexelsImageResource[] | undefined>(
        undefined
    )
    const [currentPage, setCurrentPage] = useState(0)

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
    }, [currentPage])

    return (
        <div>
            {photos && <PhotoGallery images={photos} />}
            <div ref={ref} className='h-10'></div>
        </div>
    )
}
