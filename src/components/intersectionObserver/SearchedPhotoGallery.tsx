'use client'
import { RequestPhotosBySearch } from '@/requests/requestPhotosBySearch'
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
    const [currentPage, setCurrentPage] = useState(1)

    const requestPhotos = async () => {
        console.log('paginas', currentPage)
        const data = await RequestPhotosBySearch({
            query: query,
            orientation: orientation,
            color: color,
            page: currentPage,
            per_page: 15,
        })

        setDataPhotos({
            photos: dataPhotos?.photos.concat(data.photos),
            total_results: data.total_results,
        })
    }

    useEffect(() => {
        setDataPhotos({ photos: [], total_results: 1 })
        setCurrentPage(1)
        requestPhotos()
    }, [orientation, color])

    const { ref } = useInView({
        rootMargin: '1000px',
        onChange(inView) {
            if (inView) {
                setCurrentPage(state => state + 1)
                requestPhotos()
            }
        },
    })

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
