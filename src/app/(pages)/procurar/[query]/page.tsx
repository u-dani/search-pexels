import { Title } from '@/components/Title'
import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { SearchedPhotoGallery } from '@/components/intersectionObserver/SearchedPhotoGallery'

interface IPhotoSearchPageParams {
    params: {
        query: string
    }
    searchParams: {
        orientation?: string
        color?: string
    }
}

export default async function PhotoSearchPage({
    params,
    searchParams,
}: IPhotoSearchPageParams) {
    const orientation = searchParams.orientation
    const color = searchParams.color

    return (
        <>
            <Title>
                Imagens de
                <span className='capitalize'>
                    &nbsp;
                    {decodeURIComponent(params.query)}
                </span>
            </Title>

            <NavbarGallery
                photoLinkButtonProps={{ href: '', dark: true, disabled: true }}
                videoLinkButtonProps={{
                    href: `procurar/videos/${params.query}`,
                }}
                filters={{
                    orientationParameterFilter: {
                        orientationParameterValue: orientation,
                        otherParameters: `${color ? `color=${color}` : ''}`,
                    },
                    colorParameterFilter: {
                        colorParameterValue: color,
                        otherParameters: `${
                            orientation ? `orientation=${orientation}` : ''
                        }`,
                    },
                }}
            />

            <SearchedPhotoGallery
                query={params.query}
                orientation={orientation}
                color={color}
            />
        </>
    )
}
