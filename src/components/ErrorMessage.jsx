// import React from 'react'
import { useTranslation } from "react-i18next"
import errorWarning from '@/assets/images/error-warning.svg'

const ErrorMessage = ({ message }) => {

    const { t } = useTranslation()

    if (!message) {
        return null
    }

    return (
        <div className="flex justify-start items-center gap-2 mt-2">
            <img src={errorWarning} alt={t("error")} className="w-4 h-4" />
            <p className="text-danger-red text-sm">{message}</p>
        </div>
    )
}

export default ErrorMessage