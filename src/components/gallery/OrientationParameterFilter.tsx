'use client'
import { SyntheticEvent, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { Select } from '../Select'
import { useRouter } from 'next/navigation'

interface IorientationFilterOptions {
    [key: string]: {
        title: string
        description?: string
        value?: string
    }
}

const orientationFilterOptions: IorientationFilterOptions = {
    default: {
        title: 'Todas as Orientações',
    },

    landscape: {
        title: 'Horizontal',
        value: 'landscape',
    },

    portrait: {
        title: 'Vertical',
        value: 'portrait',
    },

    square: {
        title: 'Quadrado',
        value: 'square',
    },
}

export interface IOrientationParameterFilterProps {
    orientationParameterValue?: string
    otherParameters?: string
}

export const OrientationParameterFilter = ({
    orientationParameterValue,
    otherParameters,
}: IOrientationParameterFilterProps) => {
    const pathname = usePathname()
    const router = useRouter()

    const [orientation, setOrientation] = useState(
        orientationFilterOptions[orientationParameterValue ?? 'default']
    )

    const handleSelect = ({ currentTarget }: SyntheticEvent) => {
        const dataOption = currentTarget.getAttribute('data-option')
        if (
            dataOption &&
            orientationFilterOptions[dataOption] !== orientation
        ) {
            setOrientation(orientationFilterOptions[dataOption])
            router.push(
                `${pathname}?${
                    orientationFilterOptions[dataOption].value
                        ? `orientation=${orientationFilterOptions[dataOption].value}`
                        : ''
                }&${otherParameters ?? ''}`
            )
        }
    }

    return (
        <div className='border hover:border-neutral-600 rounded'>
            <Select
                handleSelect={handleSelect}
                optionsContent={orientationFilterOptions}
                selectedOption={orientation}
            />
        </div>
    )
}
