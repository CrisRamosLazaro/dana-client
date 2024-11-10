import { useContext } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '@/contexts/auth.context'
import { ThemeContext } from '@/contexts/theme.context'
import LanguageSwitcher from './LanguageSwitcher'
import LogOutButton from './Atoms/LogOutButton'
import ThemeButton from './Atoms/ThemeButton'


const NavigationHome = () => {

    const location = useLocation()
    const { t } = useTranslation()

    const { user, logout } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'dark' ? 'dark' : 'light'

    const navLinks = [
        { path: "/", label: "home" },
        { path: "/contact", label: "contact" },
    ]

    const navLinksRight = [
        { path: "/pick-role", label: "signup" },
        { path: "/login", label: "login" },
    ]

    return (
        <div className={`flex justify-between items-center px-8 pt-4 
                ${variant === 'dark'
                ? 'bg-bg-light-gray'
                : ''}`}
        >
            <div className="flex justify-between items-center gap-8">
                {navLinks.map(({ path, label }) => {
                    const isExactMatch = location.pathname === path
                    const isHome = path === "/"

                    return (
                        <NavLink
                            key={label}
                            to={path}
                            className={`custom-underline 
                            ${isExactMatch && !isHome ? 'active' : ''} 
                            ${isHome && isExactMatch ? 'home-active' : ''}`}
                        >
                            {t(label)}
                        </NavLink>
                    )
                })}
            </div>

            <div className="flex justify-between items-center gap-8">
                <LanguageSwitcher />
                {user ? (
                    <>
                        <LogOutButton onClick={logout} />
                    </>
                ) : (
                    navLinksRight.map(({ path, label }) => {
                        const isExactMatch = location.pathname === path
                        const isHome = path === "/"

                        return (
                            <NavLink
                                key={label}
                                to={path}
                                className={`custom-underline 
                            ${isExactMatch && !isHome ? 'active' : ''} 
                            `}
                            >
                                {t(label)}
                            </NavLink>
                        )
                    })
                )}
                <ThemeButton />
            </div>
        </div>
    )
}

export default NavigationHome