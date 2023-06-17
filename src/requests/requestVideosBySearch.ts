import { HEADERS, IPexelsVideoResource } from './data'

interface IRequestVideosBySearchProps {
    query: string
    orientation?: string
    page?: number
    per_page?: number
}

export interface IRequestVideosBySearchResponse {
    videos: IPexelsVideoResource[]
    total_results: number
}

export const requestVideosBySearch = async ({
    query,
    orientation,
    page = 1,
    per_page = 15,
}: IRequestVideosBySearchProps): Promise<IRequestVideosBySearchResponse> => {
    const params = `query=${query}&locale=pt-BR${
        orientation ? `&orientation=${orientation}` : ''
    }&page=${page}&per_page=${per_page}`

    const res = await fetch(
        `https://api.pexels.com/videos/search?${params}`,
        HEADERS
    )

    const data = await res.json()

    console.log(res)
    console.log(data)
    return data
}
