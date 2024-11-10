import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { AuthContext } from '../../contexts/auth.context'

const LogOutButton = () => {

    const { logout } = useContext(AuthContext)

    const navigate = useNavigate()

    const handleLogout = () => {
        logout(navigate)
        navigate('/login')
    }

    const { t } = useTranslation()

    return (

        <div className="bg-transparent pr-4">
            <button className="text-dark-grafitti" onClick={handleLogout}>{t("logout")}</button>
        </div>

    )
}

export default LogOutButton