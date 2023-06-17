'use client'
import { requestPhotosBySearch } from '@/requests/requestPhotosBySearch'
import { useEffect, useState } from 'react'
import { IRequestPhotosBySearchResponse } from '@/requests/requestPhotosBySearch'
import { useInView } from 'react-intersection-observer'
import { PhotoGallery } from '../gallery/PhotoGallery'

interface ISearchedPhotoGalleryProps {
    query: string
    orientation?: string
    color?: string
}

export const SearchedPhotoGallery = ({
    query,
    orientation,
    color,
}: ISearchedPhotoGalleryProps) => {
    const [dataPhotos, setDataPhotos] =
        useState<IRequestPhotosBySearchResponse>({
            photos: [],
            total_results: 1,
        })

    const [currentPage, setCurrentPage] = useState(0)

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            if (inView) {
                setCurrentPage(state => state + 1)
            }
        },
    })

    useEffect(() => {
        setCurrentPage(state => 0)
        setDataPhotos({ photos: [], total_results: 1 })
    }, [orientation, color])

    useEffect(() => {
        async function request() {
            const data = await requestPhotosBySearch({
                query: query,
                orientation: orientation,
                color: color,
                page: currentPage,
                per_page: 20,
            })
            setDataPhotos({
                photos: dataPhotos.photos.concat(data.photos),
                total_results: data.total_results,
            })
        }

        request()
    }, [currentPage])

    return (
        <div>
            {dataPhotos.total_results === 0 ? (
                'Nada encontrado :('
            ) : (
                <PhotoGallery images={dataPhotos.photos} />
            )}
            <div ref={ref} className='h-10'></div>
        </div>
    )
}
