import { useContext } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import { useTranslation } from "react-i18next"

const Button = ({ onClick, text, textDisabled, className, disabledStatus }) => {

    const { t } = useTranslation()
    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    const baseClasses = `rounded-md
     transition-all duration-150 
     h-10 
     p-1 
     hover:border-opacity-75
     focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
       ${disabledStatus
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : variant === 'light'
                ? 'bg-brand-green text-white'
                : 'bg-white text-brand-green'
        }
        `

    const hoverClasses = !disabledStatus
        ? variant === 'light'
            ? 'hover:bg-highlight-coral hover:text-white'
            : 'hover:bg-secondary-green hover:text-white'
        : ''

    return (
        <button
            onClick={onClick}
            className={`${baseClasses} ${hoverClasses} ${className}`}
            type="submit"
            disabled={disabledStatus}
        >
            {disabledStatus ? textDisabled : text}
        </button>
    )
}

export default Button

