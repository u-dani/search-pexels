import { NavbarGallery } from '@/components/gallery/NavbarGallery'
import { PopularVideosGallery } from '@/components/intersectionObserver/PopularVideosGallery'
import { requestPopularVideos } from '@/requests/requestPopularVideos'

export default async function PopularVideosPage() {
    const videos = await requestPopularVideos()

    return (
        <>
            <NavbarGallery
                photoLinkButtonProps={{ href: 'popular/' }}
                videoLinkButtonProps={{
                    href: 'popular/videos',
                    dark: true,
                    disabled: true,
                }}
            />
            <PopularVideosGallery initialVideosArray={videos} />
        </>
    )
}
