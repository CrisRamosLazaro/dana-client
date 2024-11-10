import { useContext, useState } from "react"
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from "react-i18next"
import { AuthContext } from "@/contexts/auth.context"
import { ThemeContext } from '@/contexts/theme.context'
import { loginAndAuthenticateUser, getLoginRedirectPath } from "@/utils/auth-utils"
import { loginValidationSchema, validateData } from '@/utils/validation-utils'
import userFields from '@/consts/userFields'
import FormField from "./FormField"
import Button from "../Atoms/Button"

const LoginForm = () => {

    const { t } = useTranslation()
    const navigate = useNavigate()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    const [errorMessages, setErrorMessages] = useState({})

    const [loginData, setLoginData] = useState({
        email: '',
        password: ''
    })


    const handleInputChange = e => {
        const { value, name } = e.target
        setErrorMessages(prevErrors => ({ ...prevErrors, [name]: '' }))
        setLoginData({ ...loginData, [name]: value })
    }

    const handleSubmit = e => {

        e.preventDefault()

        const errors = { ...validateData(loginData, loginValidationSchema) }
        setErrorMessages(errors)

        const hasErrors = Object.keys(errors).length > 0

        if (hasErrors) {
            return
        }

        loginAndAuthenticateUser(loginData, storeToken, authenticateUser, navigate, getLoginRedirectPath, setErrorMessages)

    }

    return (
        <div className="flex flex-col justify-center w-3/4">
            <form onSubmit={handleSubmit}>
                <h2
                    className={`text-center text-xl font-extrabold mb-4 
                        ${variant === 'light'
                            ? 'text-dark-grafitti'
                            : 'text-white'
                        }
                            `}
                >
                    {t("login")}
                </h2>

                {userFields
                    .filter(field => field.id === "email" || field.id === "password")
                    .map(field => {
                        const { label, htmlFor, placeholder, type, autoComplete, id, placeholderIconLight, placeholderIconDark } = field

                        return (
                            <FormField
                                key={id}
                                label={t(label)}
                                htmlFor={htmlFor}
                                placeholder={t(placeholder)}
                                type={type}
                                autoComplete={autoComplete}
                                value={loginData[id]}
                                name={id}
                                id={id}
                                onChange={handleInputChange}
                                placeholderIconLight={placeholderIconLight}
                                placeholderIconDark={placeholderIconDark}
                                variant={variant}
                                error={t(errorMessages[id])}
                            />
                        )
                    })}

                <Link to="/forgot-password">
                    <p className="text-brand-green text-right mt-2 underline">
                        {t('forgot_password')}
                    </p>
                </Link>

                <div className="flex items-center mt-8">
                    <Button className="w-full"
                        text={t('login')}
                        disabledStatus=""
                    />
                </div>

            </form>
        </div>
    )
}

export default LoginForm