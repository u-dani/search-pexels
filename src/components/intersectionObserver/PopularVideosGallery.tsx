'use client'
import { IPexelsVideoResource } from '@/requests/data'
import { requestPopularVideos } from '@/requests/requestPopularVideos'
import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { VideoGallery } from '../gallery/VideoGallery'

interface IPopularVideosGalleryProps {
    initialVideosArray: IPexelsVideoResource[]
}

export const PopularVideosGallery = ({
    initialVideosArray,
}: IPopularVideosGalleryProps) => {
    const [videos, setVideos] = useState<IPexelsVideoResource[] | undefined>(
        initialVideosArray ?? undefined
    )
    const [currentPage, setCurrentPage] = useState(initialVideosArray ? 1 : 0)

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            inView && setCurrentPage(state => state + 1)
        },
    })

    useEffect(() => {
        async function requestVideos() {
            const data = await requestPopularVideos({ page: currentPage })
            videos ? setVideos(videos?.concat(data)) : setVideos(data)
        }
        requestVideos()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage])

    return (
        <div>
            {videos && <VideoGallery videos={videos} />}
            <span>Buscando mais videos...</span>
            <div ref={ref} className='h-10'></div>
        </div>
    )
}
