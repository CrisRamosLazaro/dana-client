import { useState, useContext, useEffect } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { AuthContext } from '@/contexts/auth.context'
import { ThemeContext } from '@/contexts/theme.context'
import { useTranslation } from "react-i18next"
import authService from '@/services/auth.services'
import { loginAndAuthenticateUser, getSignupRedirectPath } from "@/utils/auth-utils"
import { signupValidationSchema, validateData, affectedValidationSchema } from '@/utils/validation-utils'
import userFields, { placeholderTextLightTheme, placeholderTextDarkTheme } from "@/consts/userFields"
import initialAffectedUserData from '@/consts/initialAffectedUserData'
import NewAffectedForm from "./NewAffectedForm"
import FormField from "./FormField"
import Button from "../Atoms/Button"

const SignUpForm = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const { t } = useTranslation()

    const { authenticateUser, storeToken } = useContext(AuthContext)

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'

    const [loadingImage, setLoadingImage] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordTouched, setConfirmPasswordTouched] = useState(false)
    const [errorMessages, setErrorMessages] = useState({})
    const [signUpData, setSignUpData] = useState({
        email: '',
        phone: '',
        password: '',
        firstName: '',
        lastName: '',
        affectedData: initialAffectedUserData,
        role: location.state ? location.state.role : null
    })

    useEffect(() => {
        if (!location.state) {
            navigate('/pick-role')
        }
    }, [location, navigate])

    const handleInputChange = e => {
        const { value, name } = e.target

        if (name.startsWith("affectedData.")) {
            const fieldName = name.replace("affectedData.", "")
            setErrorMessages(prevErrors => ({
                ...prevErrors,
                affectedData: {
                    ...prevErrors.affectedData,
                    [fieldName]: ''
                }
            }))
        } else {
            setErrorMessages(prevErrors => ({ ...prevErrors, [name]: '' }))
        }

        if (name.startsWith("affectedData.")) {
            const [_, fieldName] = name.split(".")
            setSignUpData((prevState) => ({
                ...prevState,
                affectedData: {
                    ...prevState.affectedData,
                    [fieldName]: value,
                },
            }))
        } else {
            setSignUpData({
                ...signUpData,
                [name]: value,
            })
        }
    }

    useEffect(() => {
        if (confirmPasswordTouched && errorMessages.confirmPassword) {
            setErrorMessages(prevErrors => ({ ...prevErrors, confirmPassword: '' }))
        }
    }, [confirmPassword, confirmPasswordTouched])

    const handleNewUserSubmit = e => {
        e.preventDefault()

        const errors = {
            ...validateData({ ...signUpData, confirmPassword: confirmPassword }, signupValidationSchema),
            affectedData: signUpData.role === 'AFFECTED' ? validateData(signUpData.affectedData, affectedValidationSchema) : {}
        }
        setErrorMessages(errors)

        const hasErrorsOutsideAffectedData = Object.keys(errors).length > 1 || (Object.keys(errors).length === 1 && !errors.hasOwnProperty('affectedData'))

        const hasAffectedDataErrors = errors.affectedData && Object.keys(errors.affectedData).length > 0

        if (hasErrorsOutsideAffectedData || (signUpData.role === 'AFFECTED' && hasAffectedDataErrors)) {
            return
        }

        const dataToSubmit = { ...signUpData }
        if (signUpData.role !== 'AFFECTED') {
            delete dataToSubmit.affectedData
        }

        authService
            .signup(dataToSubmit)
            .then(() => loginAndAuthenticateUser(dataToSubmit, storeToken, authenticateUser, navigate, getSignupRedirectPath))

            .catch(err => {
                if (err.response && err.response.status === 409) {
                    const { field, message } = err.response.data
                    setErrorMessages({ [field]: message })
                    console.error("client catch errorMessages", errorMessages)
                } else {
                    console.error("Error details:", err.response || err)
                }
            })
    }

    const { role, affectedData } = signUpData

    return (

        <div className="flex flex-col justify-center w-3/4">

            <form onSubmit={handleNewUserSubmit} >
                <h2
                    className={`text-center text-xl font-extrabold mb-4 
                        ${variant === 'light'
                            ? 'text-dark-grafitti'
                            : 'text-white'
                        }
                            `}
                >
                    {t("signup")}
                </h2>

                {userFields.filter(field => {
                    if ((field.id === 'firstName' || field.id === 'lastName') && role !== 'AFFECTED') {
                        return false
                    }
                    return true
                }).map(field => {
                    const { label, htmlFor, placeholder, type, autoComplete, id, placeholderIconLight, placeholderIconDark } = field

                    return (
                        <FormField
                            key={id}
                            label={t(label)}
                            htmlFor={htmlFor}
                            placeholder={t(placeholder)}
                            type={type}
                            autoComplete={autoComplete}
                            value={signUpData[id]}
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

                <FormField
                    label={t('password_confirm')}
                    htmlFor='confirmPassword'
                    placeholder={t('password_confirm')}
                    type="password"
                    autoComplete="new-password"
                    value={confirmPassword}
                    name="confirmPassword"
                    id="confirmPassword"
                    onChange={e => {
                        if (!confirmPasswordTouched) setConfirmPasswordTouched(true)
                        setConfirmPassword(e.target.value)
                    }}
                    placeholderIconLight={placeholderTextLightTheme}
                    placeholderIconDark={placeholderTextDarkTheme}
                    variant={variant}
                    error={t(errorMessages.confirmPassword)}
                />

                {
                    role === 'AFFECTED' && (
                        <NewAffectedForm
                            onChange={handleInputChange}
                            initialAffectedData={affectedData}
                            setSignUpData={setSignUpData}
                            error={errorMessages.affectedData}
                            variant={variant}
                            setLoadingImage={setLoadingImage}
                        />
                    )
                }

                <div className="flex items-center mt-8">
                    <Button className="w-full"
                        text={t('ready')}
                        textDisabled={t('loading')}
                        disabledStatus={loadingImage}
                    />
                </div>
            </form >

        </div >
    )
}

export default SignUpForm