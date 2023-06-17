import { HEADERS, IPexelsImageResource } from './data'

interface IRequestPhotosBySearchProps {
    query: string
    orientation?: string
    color?: string
    page?: number
    per_page?: number
}

export interface IRequestPhotosBySearchResponse {
    photos: IPexelsImageResource[]
    total_results: number
}

export const requestPhotosBySearch = async ({
    query,
    orientation,
    color,
    page = 1,
    per_page = 15,
}: IRequestPhotosBySearchProps): Promise<IRequestPhotosBySearchResponse> => {
    const params = `query=${query}&locale=pt-BR${
        orientation ? `&orientation=${orientation}` : ''
    }${color ? `&color=${color}` : ''}&page=${page}&per_page=${per_page}`

    const res = await fetch(
        `https://api.pexels.com/v1/search?${params}`,
        HEADERS
    )

    const data = await res.json()
    return data
}
