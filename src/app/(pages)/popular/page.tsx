import { Title } from '@/components/Title'
import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { PopularPhotosGallery } from '@/components/intersectionObserver/PopularPhotosGallery'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'

export default async function PopularPhotosPage() {
    const photos = await requestPopularPhotos()

    return (
        <>
            <Title>Fotos em Destaque</Title>
            <NavbarGallery
                photoLinkButtonProps={{
                    href: 'popular/',
                    dark: true,
                    disabled: true,
                }}
                videoLinkButtonProps={{ href: 'popular/videos' }}
            />
            <PopularPhotosGallery initialPhotosArray={photos} />
        </>
    )
}
