'use client'
import { splitArrayIntoGroups } from '@/functions/splitArrayIntoGroups'
import { IPexelsVideoResource } from '@/requests/data'
import { useMediaQuery } from 'usehooks-ts'
import { VideoContainer } from './VideoContainer'

interface IVideoGalleryProps {
    videos: IPexelsVideoResource[]
}

export const VideoGallery = ({ videos }: IVideoGalleryProps) => {
    const matches = useMediaQuery('(max-width: 768px)')
    const gridColumns = matches ? 2 : 3

    const arrayVideos = splitArrayIntoGroups({
        array: videos,
        groupsAmount: gridColumns,
    })

    console.log(arrayVideos)

    return (
        <div>
            {arrayVideos ? (
                <div className='grid gap-6 grid-cols-3 max-md:grid-cols-2 max-[480px]:grid-cols-1'>
                    {arrayVideos.map(column => (
                        <div
                            key={JSON.stringify(column)}
                            className='flex flex-col gap-6'>
                            {column.map(({ ...props }) => (
                                <VideoContainer key={props.id} {...props} />
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <span>Carregando Videos</span>
            )}
        </div>
    )
}
