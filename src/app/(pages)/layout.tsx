import { Header } from '@/components/layout/Header'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            <Header />
            <div className='px-8 max-md:px-3'>{children}</div>
        </main>
    )
}
