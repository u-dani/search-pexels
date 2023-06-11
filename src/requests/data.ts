const APIKEY = 'vx8kSayHnrzd4Cg1NXgYenVHyOhPiPF4PSx8x8YJur1tnyvqyEH3iVgO'
export const HEADERS = {
    method: 'GET',
    headers: {
        Accept: 'aplication/json',
        Authorization: APIKEY,
    },
}

export interface IPexelsImageResource {
    id: number
    url: string
    photographer: string
    photographer_url: string
    src: {
        original: string
        landscape: string
        portrait: string
        medium: string
    }
    alt: string
}
