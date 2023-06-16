export interface IButtonProps {
    disabled?: boolean
    pill?: boolean
    dark?: boolean
    full?: boolean
    border?: boolean
    children: React.ReactNode
    handleClick?(): void
}

export const Button = (props: IButtonProps) => {
    return (
        <button
            onClick={props.handleClick}
            className={`group tracking-wide font-medium rounded ${
                props.dark ? 'bg-zinc-950 text-white' : 'text-black'
            } ${props.pill ? 'rounded-full py-3 px-6' : 'py-2 px-4'} ${
                props.full ? 'w-full' : 'w-max'
            } ${props.disabled ? 'pointer-events-none' : 'cursor-pointer'} ${
                props.border
                    ? 'border hover:border-neutral-500 duration-150'
                    : 'border-none'
            }`}>
            <span className='opacity-80 duration-150 group-hover:opacity-100 ease-in-out'>
                {props.children}
            </span>
        </button>
    )
}
