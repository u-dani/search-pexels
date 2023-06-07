'use client'
import { SyntheticEvent, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

interface IOptionContent {
    [key: string]: {
        icon?: JSX.Element
        title: string
    }
}

interface ISelectProps {
    optionsContent: IOptionContent
    selectedOption: IOptionContent[0]
    handleSelect({ currentTarget }: SyntheticEvent): void
}

export const Select = ({
    optionsContent,
    selectedOption,
    handleSelect,
}: ISelectProps) => {
    const [toggleOptionsDisplay, setToggleOptionsDisplay] = useState(false)

    const toggleOnClick = () => {
        setToggleOptionsDisplay(state => !state)
    }

    return (
        <div
            onClick={toggleOnClick}
            className='px-4 py-2 flex justify-center items-center cursor-pointer w-full relative'>
            <button className='w-full' type='button'>
                <span className='text-base flex items-center gap-2 justify-between font-medium'>
                    <div className='gap-2 flex items-center'>
                        {selectedOption.icon}
                        <span
                            className={`text-base ${
                                selectedOption.icon && 'max-md:hidden'
                            }`}>
                            {selectedOption.title}
                        </span>
                    </div>
                    <IoIosArrowDown
                        className={`text-gray-600 duration-150 ${
                            toggleOptionsDisplay && 'rotate-180'
                        }`}
                    />
                </span>
            </button>

            {toggleOptionsDisplay && (
                <div className='z-50 absolute bg-white border rounded-lg py-2 w-full my-2 left-0 top-full'>
                    {Object.keys(optionsContent).map(opt => (
                        <span
                            key={optionsContent[opt].title}
                            onClick={handleSelect}
                            className={`px-4 py-2 font-medium hover:bg-gray-100 text-lg items-center gap-2 flex ${
                                optionsContent[opt].title ===
                                selectedOption.title
                                    ? 'text-emerald-600'
                                    : 'text-gray-900'
                            }`}
                            data-option={opt}>
                            {optionsContent[opt].icon}
                            <span
                                className={`text-base ${
                                    selectedOption.icon && 'max-md:hidden'
                                }`}>
                                {optionsContent[opt].title}
                            </span>
                        </span>
                    ))}
                </div>
            )}
        </div>
    )
}
