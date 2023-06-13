import { HEADERS, IPexelsVideoResource } from './data'

interface IRequestPopularVideosProps {
    page?: number
    per_page?: number
}

export const requestPopularVideos = async (
    props?: IRequestPopularVideosProps
): Promise<IPexelsVideoResource[]> => {
    const res = await fetch(
        `https://api.pexels.com/videos/popular?page=${
            props?.page ?? '1'
        }&per_page=${props?.per_page ?? '15'}`,
        HEADERS
    )

    const data = await res.json()
    return data.videos
}
