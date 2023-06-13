import { PopularPhotosGallery } from '@/components/intersectionObserver/PopularPhotosGallery'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'

export default async function PopularPhotosPage() {
    const photos = await requestPopularPhotos()

    return (
        <div>
            <PopularPhotosGallery initialPhotosArray={photos} />
        </div>
    )
}
