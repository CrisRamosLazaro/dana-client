import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import { useTranslation } from 'react-i18next'
import ErrorMessage from "./ErrorMessage"

const SelectFormField = ({ label, htmlFor, id, value, name, onChange, optionsArr, error }) => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const { t } = useTranslation()

    const [options, setOptions] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        setOptions(optionsArr)
    }, [])

    const handleSelect = (option) => {
        onChange({ target: { value: option, name: name } })
        setSearchTerm(option)
        setIsOpen(false)
    }

    const filteredOptions = options.filter(option => option.toLowerCase().includes(searchTerm.toLowerCase()))

    const selectedOption = options.find(option => option === value) || `${t('select')} ${t(label)}`

    return (
        <>
            <div className="mb-3">
                <input
                    id={id}
                    className={`w-full p-2 bg-transparent border-none shadow-md text-left placeholder-white
                    outline-none focus:outline-none active:outline-none 
                    bg-no-repeat bg-right-10-center bg-20`}
                    name={name}
                    onClick={(e) => {
                        e.preventDefault()
                        setIsOpen(!isOpen)
                    }}
                    placeholder={selectedOption}
                    value={searchTerm}
                    type="text"
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <label htmlFor={htmlFor} className="sr-only">{label}</label>
                <ErrorMessage message={error} />
            </div>
            {
                isOpen && (
                    <div className="bg-opacity-25 bg-gray-500 rounded-md shadow-md">
                        <ul className="list-none">

                            {filteredOptions.map((option, i) => (

                                <li
                                    className="flex justify-start mb-2 hover:bg-black hover:bg-opacity-25 rounded cursor-pointer"
                                    key={i}
                                    onClick={() => handleSelect(option)}
                                >
                                    <div>
                                        {option}
                                    </div>
                                </li>

                            )
                            )}

                        </ul>
                    </div>
                )}
        </>
    )
}

export default SelectFormField