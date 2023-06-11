import Image from 'next/image'
import { requestPopularPhotos } from '@/requests/requestPopularPhotos'
import { Logo } from '@/components/Logo'
import { SearchField } from '@/components/SearchField'
import { Navbar } from '@/components/Navbar'

export default async function Home() {
    const res = await requestPopularPhotos({ per_page: 1 })
    const photo = res[0]

    return (
        <main>
            <Image
                src={photo.src.landscape}
                alt={photo.alt}
                fill
                style={{ objectFit: 'cover' }}
            />
            <span className='absolute top-0 left-0 bg-black w-screen h-screen opacity-40'></span>

            <div className='absolute top-0 left-0 p-6 w-full'>
                <div className='flex justify-between items-center mb-20'>
                    <Logo white />
                    <Navbar white />
                </div>

                <div className='flex justify-center w-full'>
                    <div className='max-w-[700px] flex flex-col gap-10'>
                        <h1 className='text-4xl text-white font-medium max-md:text-3xl'>
                            As melhores fotos profissionais gratuitas, imagens e
                            vídeos livres de royalties que os criadores
                            compartilharam.
                        </h1>
                        <SearchField />
                    </div>
                </div>
            </div>
        </main>
    )
}
