import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme.context'
import { useTranslation } from 'react-i18next'

const Footer = () => {

    const { t } = useTranslation()

    const { theme } = useContext(ThemeContext)

    return (
        <footer className={`fixed bottom-0 left-0 w-full text-center text-xs py-2
           ${theme === 'dark'
                ? 'bg-white text-black'
                : 'bg-black text-white'
            }`}
        >
            {t("all_rights_reserved")}
        </footer>
    )
}

export default Footer
