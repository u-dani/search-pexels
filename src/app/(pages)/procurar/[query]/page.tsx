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
        <div className='flex flex-col gap-2'>
            <NavbarGallery
                photoLinkButtonProps={{ href: '', dark: true, disabled: true }}
                videoLinkButtonProps={{ href: '' }}
                orientationParameterFilter={{
                    orientationParameterValue: orientation,
                    otherParameters: `${color && `color=${color}`}`,
                }}
                colorParameterFilter={{
                    colorParameterValue: color,
                    otherParameters: `${
                        orientation && `orientation=${orientation}`
                    }`,
                }}
            />
        </div>
    )
}
