export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang='pt-BR'>
            <body>
                <span>bom dia</span>
                {children}
            </body>
        </html>
    )
}
