import { Title } from '@/components/Title'
import { ColorParameterFilter } from '@/components/gallery/ColorParameterFilter'
import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { OrientationParameterFilter } from '@/components/gallery/OrientationParameterFilter'

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
                Images de
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
                orientationParameterFilter={{
                    orientationParameterValue: orientation,
                    otherParameters: `${color ? `color=${color}` : ''}`,
                }}
                colorParameterFilter={{
                    colorParameterValue: color,
                    otherParameters: `${
                        orientation ? `orientation=${orientation}` : ''
                    }`,
                }}
            />
        </>
    )
}
