import { useContext, useState } from 'react'
import { ThemeContext } from '@/contexts/theme.context'
import { useNavigate } from "react-router-dom"
import { useTranslation } from 'react-i18next'
import RoleCard from './Atoms/RoleCard'
import Button from './Atoms/Button'
import affected from '@/assets/images/circle-exclamation.svg'
import helper from '@/assets/images/hand-helping.svg'

const PickRole = () => {

    const { theme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'light' : 'dark'
    const navigate = useNavigate()
    const { t } = useTranslation()

    const [userRole, setUserRole] = useState(null)

    const handlePickUserRole = (userType) => {
        setUserRole(userType)
    }

    const handleSubmit = e => {
        e.preventDefault()
        navigate('/signup', { state: { role: userRole } })
    }

    return (
        <div className={`w-3/4 flex flex-col items-center justify-center
        ${variant === 'dark'
                ? 'bg-bg-light-gray'
                : ''}
        `}>

            <form
                className="w-3/4 flex flex-col items-center justify-center"
                onSubmit={handleSubmit}
            >

                <h1 className="font-bold text-xl text-center" >
                    {t("select_your_profile")}
                </h1>

                <div className="flex justify-between items-center my-6 gap-12">
                    <RoleCard
                        role='AFFECTED'
                        image={affected}
                        text="im_affected"
                        handlePickUserRole={handlePickUserRole}
                        isSelected={userRole === 'AFFECTED'}
                    />

                    <RoleCard
                        role='HELPER'
                        image={helper}
                        text="im_a_helper"
                        handlePickUserRole={handlePickUserRole}
                        isSelected={userRole === 'HELPER'}
                    />
                </div>

                <Button
                    type="submit"
                    disabledStatus={!userRole}
                    text={t("continue")}
                    textDisabled={t("select")}
                    className='w-1/4'
                />
            </form >
        </div>
    )
}

export default PickRole