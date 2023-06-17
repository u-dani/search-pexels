'use client'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { VideoGallery } from '../gallery/VideoGallery'
import {
    IRequestVideosBySearchResponse,
    requestVideosBySearch,
} from '@/requests/requestVideosBySearch'

interface ISearchedVideoGalleryProps {
    query: string
    orientation?: string
}

export const SearchedVideoGallery = ({
    query,
    orientation,
}: ISearchedVideoGalleryProps) => {
    const [dataVideos, setDataVideos] =
        useState<IRequestVideosBySearchResponse>({
            videos: [],
            total_results: 1,
        })
    const [currentPage, setCurrentPage] = useState(1)

    const requestVideos = async () => {
        console.log('paginas', currentPage)
        const data = await requestVideosBySearch({
            query: query,
            orientation: orientation,
            page: currentPage,
            per_page: 20,
        })

        setDataVideos({
            videos: dataVideos?.videos.concat(data.videos),
            total_results: data.total_results,
        })
    }

    useEffect(() => {
        setDataVideos({ videos: [], total_results: 1 })
        setCurrentPage(1)
        requestVideos()
    }, [orientation])

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            if (inView) {
                setCurrentPage(state => state + 1)
                requestVideos()
            }
        },
    })

    return (
        <div>
            {dataVideos.total_results === 0 ? (
                'Nada encontrado :('
            ) : (
                <VideoGallery videos={dataVideos.videos} />
            )}

            <div ref={ref} className='h-10'></div>
        </div>
    )
}
