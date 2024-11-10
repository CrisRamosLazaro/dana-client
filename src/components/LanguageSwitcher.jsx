import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function LanguageSwitcher() {
    const { i18n, t } = useTranslation()

    const changeLanguage = (event) => {
        i18n.changeLanguage(event.target.value)
    }

    const [selectedLanguage, setSelectedLanguage] = useState('es')
    const [isOpen, setIsOpen] = useState(false)

    const handleLanguageChange = (language) => {
        setSelectedLanguage(language)
        changeLanguage({ target: { value: language } })
        setIsOpen(false)
    }

    return (

        <div className="relative">
            <div
                className="flex justify-between items-center bg-transparent cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {t(`language_${selectedLanguage}`)}
                <svg
                    className={`w-4 h-4 ml-2 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
            </div>
            {isOpen && (
                <ul className="absolute bg-white border border-gray-300 mt-2">
                    <li
                        className="bg-transparent text-dark-grafitti px-4 py-2 cursor-pointer hover:bg-slate-400"
                        onClick={() => handleLanguageChange('es')}
                    >
                        {t("language_es")}
                    </li>
                    <li
                        className="bg-transparent text-dark-grafitti px-4 py-2 cursor-pointer hover:bg-slate-400"
                        onClick={() => handleLanguageChange('en')}
                    >
                        {t("language_en")}
                    </li>
                </ul>
            )}
        </div>
    )
}

export default LanguageSwitcher