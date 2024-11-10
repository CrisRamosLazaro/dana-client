import { useContext, useEffect, useState } from "react"
import { AuthContext } from '../contexts/auth.context'
import { ThemeContext } from '../contexts/theme.context'
import { useTranslation } from "react-i18next"
import userService from "../services/user.services"

const [showModal, setShowModal] = useState(false)

const handleDelete = event => {
    event.preventDefault()

    userService
        .deleteOneUser(user._id)
        .then(() => {
            logout()
            navigate('/login')
        })
        .catch(err => console.log(err))
}

return (
    <div>
        <button
            className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
            onClick={() => setShowModal(true)}
        >
            {t("delete")}
        </button>

        {
            showModal && (
                <div
                    className={`fixed inset-0 z-50 flex items-center justify-center 
                        ${theme === "dark"
                            ? "bg-black bg-opacity-75"
                            : "bg-gray-900 bg-opacity-75"
                        }`
                    }
                >
                    <div className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full">
                        <h2 className="text-xl font-bold text-dark-grafitti mb-4">
                            {t("are_you_sure")}
                        </h2>
                        <div className="flex justify-end space-x-4">
                            <button
                                onClick={() => setShowModal(false)}
                                className="px-4 py-2 rounded-md bg-gray-300 hover:bg-gray-400 text-gray-800"
                            >
                                {t("cancel")}
                            </button>
                            <button
                                onClick={handleDelete}
                                className="px-4 py-2 rounded-md bg-red-500 hover:bg-red-600 text-white"
                            >
                                {t("delete")}
                            </button>
                        </div>
                    </div>
                </div>
            )
        }
    </div>
)