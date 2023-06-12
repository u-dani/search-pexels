import { PopularPhotosGallery } from '@/components/intersectionObserver/PopularPhotosGallery'
import { IPexelsImageResource } from '@/requests/data'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export default async function PopularPhotosPage() {
    const photos = await requestPopularPhotos()

    return (
        <div>
            <PopularPhotosGallery initialPhotosArray={photos} />
        </div>
    )
}
