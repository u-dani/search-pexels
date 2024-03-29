'use client'
import { useState, useRef, SyntheticEvent } from 'react'
import { useRouter } from 'next/navigation'
import { BsCardImage } from 'react-icons/bs'
import { BsPlayBtn } from 'react-icons/bs'
import { MdSearch } from 'react-icons/md'
import { Select } from './Select'

interface ISearchContentTypes {
    [key: string]: {
        icon?: JSX.Element
        title: string
        placeholder?: string
        path?: string
    }
}

const searchContentTypes: ISearchContentTypes = {
    photos: {
        icon: <BsCardImage />,
        title: 'Fotos',
        placeholder: 'Buscar fotos gratuitas',
        path: 'procurar',
    },
    videos: {
        icon: <BsPlayBtn />,
        title: 'Vídeos',
        placeholder: 'Buscar vídeos gratuitos',
        path: 'procurar/videos',
    },
}

export const SearchField = () => {
    const searchInputValue = useRef<HTMLInputElement>(null)
    const [selectedSearchType, setSelectedSearchType] = useState(
        searchContentTypes.photos
    )
    const [inputFocus, setInputFocus] = useState(false)

    const router = useRouter()

    const submit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (searchInputValue.current?.value) {
            router.push(
                `${selectedSearchType.path}/${searchInputValue.current?.value}`
            )
        }
    }

    const handleSelect = ({ currentTarget }: SyntheticEvent) => {
        const dataOption = currentTarget.getAttribute('data-option')
        if (dataOption) {
            setSelectedSearchType(searchContentTypes[dataOption])
        }
    }

    return (
        <form
            onSubmit={submit}
            className={`w-full border rounded-lg flex items-center ${
                inputFocus ? 'bg-white' : 'bg-gray-100'
            } }`}>
            <div>
                <Select
                    optionsContent={searchContentTypes}
                    selectedOption={selectedSearchType}
                    handleSelect={handleSelect}
                />
            </div>

            <input
                ref={searchInputValue}
                type='text'
                placeholder={selectedSearchType.placeholder}
                className='font-medium text-lg tracking-wide px-3 py-1 bg-transparent border-x flex-1 outline-none text-gray-600 max-lg:text-base w-full'
                minLength={1}
                onFocus={() => {
                    setInputFocus(true)
                }}
                onBlur={() => {
                    setInputFocus(false)
                }}
            />

            <button
                type='submit'
                className='group/button-search flex justify-center items-center p-3'
                title='Pesquisar'>
                <MdSearch className='text-gray-600 group-hover/button-search:text-emerald-700 text-2xl max-md:text-xl' />
            </button>
        </form>
    )
}
