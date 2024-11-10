import { useContext } from 'react'
import { ThemeContext } from '../../contexts/theme.context'
import Icon from '../../assets/images/weather.png'
import Icon2 from '../../assets/images/weather2.png'

const ThemeButton = () => {
    const { theme, switchTheme } = useContext(ThemeContext)

    return (
        <button onClick={switchTheme} className="p-2 rounded-md">
            {theme === 'light' ? (
                <img src={Icon} alt='theme' className="w-6 h-6" />
            ) : (
                <img src={Icon2} alt='theme' className="w-6 h-6" />
            )}
        </button>
    )
}

export default ThemeButton