import { HEADERS, IPexelsImageResource } from './data'

interface IRequestPopularPhotosProps {
    page?: number
    per_page?: number
}

export const requestPopularPhotos = async (
    props?: IRequestPopularPhotosProps
): Promise<IPexelsImageResource[]> => {
    const res = await fetch(
        `https://api.pexels.com/v1/curated?page=${
            props?.page ?? '1'
        }&per_page=${props?.per_page ?? '15'}`,
        HEADERS
    )

    const data = await res.json()
    return data.photos
}
