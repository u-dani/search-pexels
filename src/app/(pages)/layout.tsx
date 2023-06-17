import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Header />
            <div className='px-8 max-md:px-3 flex flex-col pt-20 max-md:pt-10 gap-8'>
                {children}
            </div>
            <Footer />
        </main>
    )
}
