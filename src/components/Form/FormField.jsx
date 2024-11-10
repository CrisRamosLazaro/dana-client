import { useState } from 'react'
import ErrorMessage from "../ErrorMessage"
import getThemedClasses from '@/consts/themedClasses'

const FormField = ({ label, htmlFor, placeholder, placeholderIconLight, placeholderIconDark, type, value, name, id, autoComplete, onChange, variant, error }) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [passwordIcon, setPasswordIcon] = useState(`bg-password-input-light-hide`)

    const switchPasswordIcon = (isVisible, variant) => {
        isVisible
            ? setPasswordIcon(`bg-password-input-${variant}-show`)
            : setPasswordIcon(`bg-password-input-${variant}-hide`)
    }

    const togglePasswordVisibility = () => {
        const newVisibility = !isPasswordVisible
        setIsPasswordVisible(newVisibility)
        switchPasswordIcon(newVisibility, variant)
    }

    const themedClasses = getThemedClasses(variant, placeholderIconLight, placeholderIconDark)

    return (
        <div className="mt-6">

            <label className="" htmlFor={htmlFor}>{label}</label>
            <div className="relative">
                <input
                    className={`w-full border-none shadow-md outline-none p-2 mt-2 rounded-md 
                        bg-no-repeat bg-right-10-center bg-20
                        ${themedClasses}
                        ${(type === "password" ? passwordIcon : '')}
                        `}
                    placeholder={placeholder}
                    type={type === 'password' ? (isPasswordVisible ? 'text' : 'password') : type}
                    autoComplete={autoComplete || "on"}
                    value={value}
                    name={name}
                    id={id}
                    onChange={onChange}
                />
                {type === 'password' && (
                    <button
                        onClick={togglePasswordVisibility}
                        type="button"
                        className="absolute inset-y-0 right-0 pr-8 flex items-center text-sm leading-5"
                    >
                    </button>
                )}
            </div>
            <ErrorMessage message={error} />
        </div>
    )
}

export default FormField