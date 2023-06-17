'use client'
import { SyntheticEvent, useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { IoIosArrowDown } from 'react-icons/io'

const hexColors = [
    '#ff0000',
    '#ffa500',
    '#ffff00',
    '#008000',
    '#40e0d0',
    '#0000ff',
    '#ee82ee',
    '#ffc0cb',
    '#a52a2a',
    '#000000',
    '#808080',
    '#ffffff',
]

export interface IColorParameterFilterProps {
    colorParameterValue?: string
    otherParameters?: string
}

export const ColorParameterFilter = ({
    colorParameterValue,
    otherParameters,
}: IColorParameterFilterProps) => {
    const [toggleOptionsDisplay, setToggleOptionsDisplay] = useState(false)

    const toggleOnClick = () => {
        setToggleOptionsDisplay(state => !state)
    }

    const pathname = usePathname()
    const router = useRouter()

    const [color, setColor] = useState(colorParameterValue)
    const inputColorRef = useRef<HTMLInputElement>(null)

    const selectColorAndRedirect = (colorSelected: string | undefined) => {
        setColor(colorSelected)
        router.push(
            `${pathname}?${colorSelected ? `color=${colorSelected}` : ''}&${
                otherParameters ?? ''
            }`
        )
    }

    const handleSelect = ({ currentTarget }: SyntheticEvent) => {
        const dataOption = currentTarget.getAttribute('data-option')
        const colorSelected = dataOption?.substring(1)

        if (colorSelected && colorSelected !== color) {
            inputColorRef.current!.value = colorSelected
            selectColorAndRedirect(colorSelected)
        }
    }

    const handleInputColor = () => {
        const inputRef = inputColorRef.current

        const validateColorHexCode = inputRef!.value.replaceAll(
            /[^A-Fa-f0-9]/g,
            ''
        )

        inputRef!.value = validateColorHexCode

        if (inputRef?.value.length === 0) {
            selectColorAndRedirect(undefined)
        }

        if (inputRef?.value.length === 3 || inputRef?.value.length === 6) {
            selectColorAndRedirect(inputRef?.value)
        }
    }

    return (
        <div
            className='px-4 py-2 cursor-pointer w-full relative border hover:border-neutral-600 rounded'
            onClick={toggleOnClick}>
            <button className='w-full flex items-center gap-2' type='button'>
                <span
                    style={{ backgroundColor: `#${color ? color : 'ffffff'}` }}
                    className='rounded-full border w-7 aspect-square'></span>
                <div className='flex w-full'>
                    <span>#</span>
                    <input
                        type='text'
                        ref={inputColorRef}
                        onInput={handleInputColor}
                        maxLength={6}
                        placeholder='Insira o código hexadecimal'
                        className='bg-transparent w-full outline-none font-medium placeholder:pl-1'
                        defaultValue={colorParameterValue ?? ''}
                    />
                </div>
                <IoIosArrowDown
                    className={`text-gray-600 duration-150 ${
                        toggleOptionsDisplay && 'rotate-180'
                    }`}
                />
            </button>

            {toggleOptionsDisplay && (
                <div className='z-50 absolute bg-white border rounded-lg p-2 min-w-full my-3 left-0 top-full flex flex-wrap gap-1 justify-center'>
                    {hexColors.map(hex => (
                        <span
                            key={hex}
                            style={{ backgroundColor: hex }}
                            onClick={handleSelect}
                            className={`w-14 aspect-video border`}
                            data-option={hex}></span>
                    ))}
                </div>
            )}
        </div>
    )
}
