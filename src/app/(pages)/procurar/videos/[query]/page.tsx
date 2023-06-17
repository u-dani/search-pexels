import { Title } from '@/components/Title'
import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { SearchedVideoGallery } from '@/components/intersectionObserver/SearchedVideoGallery'

interface IVideoSearchPageParams {
    params: {
        query: string
    }
    searchParams: {
        orientation?: string
    }
}

export default async function VideoSearchPage({
    params,
    searchParams,
}: IVideoSearchPageParams) {
    return (
        <>
            <Title>
                Vídeos de
                <span className='capitalize'>
                    &nbsp;
                    {decodeURIComponent(params.query)}
                </span>
            </Title>

            <NavbarGallery
                photoLinkButtonProps={{
                    href: `procurar/${params.query}`,
                }}
                videoLinkButtonProps={{
                    href: '',
                    dark: true,
                    disabled: true,
                }}
                filters={{
                    orientationParameterFilter: {
                        orientationParameterValue: searchParams.orientation,
                    },
                }}
            />

            <SearchedVideoGallery
                query={params.query}
                orientation={searchParams.orientation}
            />
        </>
    )
}
