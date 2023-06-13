import { PopularVideosGallery } from '@/components/intersectionObserver/PopularVideosGallery'
import { requestPopularVideos } from '@/requests/requestPopularVideos'

export default async function PopularVideosPage() {
    const videos = await requestPopularVideos()

    return (
        <div>
            <PopularVideosGallery initialVideosArray={videos} />
        </div>
    )
}
