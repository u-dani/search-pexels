export const Title = ({ children }: { children: React.ReactNode }) => {
    return (
        <h1 className='text-5xl font-semibold max-md:text-4xl text-neutral-800'>
            {children}
        </h1>
    )
}
