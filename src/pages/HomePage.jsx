import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeContext } from '@/contexts/theme.context'


const HomePage = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'
    const { t } = useTranslation()

    return (
        <div
            className={`h-full w-full font-inter p-4
                ${variant === 'dark'
                    ? 'bg-bg-light-gray'
                    : ''}`}
        >
            <h1>¿Cómo funciona?</h1>
            <h2>Gente afectada</h2>
            <p>Haz una lista con lo que necesitas</p>
            <h2>Quiero ayudar</h2>
            <p>Puedes comprar lo que le hace falta a la gente afectada, y se entregará directamente a su casa, o ayudar comprando en cantidad</p>
        </div>
    )
}

export default HomePage
