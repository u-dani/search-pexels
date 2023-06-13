'use client'
import { FiDownload } from 'react-icons/fi'
import { saveAs } from 'file-saver'
import { useRef } from 'react'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import Link from 'next/link'
import { IPexelsVideoResource } from '@/requests/data'

export const VideoContainer = ({
    user,
    url,
    video_files,
}: IPexelsVideoResource) => {
    const videoRef = useRef<HTMLVideoElement>(null)

    const downloadVideo = () => {
        saveAs(video_files[0].link, 'video :D')
    }

    const playVideo = () => {
        videoRef.current?.play()
    }

    const resetVideoTime = () => {
        videoRef.current?.pause()
    }

    return (
        <div className='bg-gray-300 cursor-pointer relative group'>
            <video ref={videoRef} width='100%' height='auto' loop muted>
                <source src={video_files[0].link} />
            </video>

            <span className='group-hover:block hidden absolute top-0 left-0 bg-black w-full h-full opacity-20'></span>

            <BsFillPlayBtnFill className='absolute top-4 left-4 text-2xl text-white' />

            <Link
                href={url}
                target='_blank'
                className='w-full h-full absolute top-0 left-0'>
                <span
                    onMouseEnter={playVideo}
                    onMouseOut={resetVideoTime}
                    className='absolute top-0 left-0 w-full h-full bg-sky-50 opacity-0'></span>
            </Link>

            <div className='group-hover:flex hidden absolute bottom-4 left-0 justify-between items-center w-full px-4 gap-2'>
                <Link href={user.url} target='_blank'>
                    <span className='text-white text-xl max-md:text-lg hover:underline'>
                        {user.name}
                    </span>
                </Link>
                <button
                    onClick={downloadVideo}
                    className='text-xl p-2 bg-white rounded hover:opacity-80'>
                    <FiDownload className='text-gray-800' />
                </button>
            </div>
        </div>
    )
}
