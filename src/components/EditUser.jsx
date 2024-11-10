import { useState, useContext, useEffect } from "react"
import { ThemeContext } from '../contexts/theme.context'
import { useNavigate, useParams } from "react-router-dom"
import Loader from "../components/Loader"
import { useTranslation } from "react-i18next"
import userService from "../services/user.services"
import uploadServices from "../services/upload.services"

const EditUser = ({ navigatePath }) => {

    const { id } = useParams()
    const [userFound, setUserFound] = useState(null)
    const [userData, setUserData] = useState({
        email: '',
        phone: '',
        username: '',
        firstName: '',
        lastName: '',
        avatar: ''
    })

    const { theme, switchTheme } = useContext(ThemeContext)
    const variant = theme === 'light' ? 'dark' : 'light'

    const [loadingImage, setLoadingImage] = useState(false)

    const navigate = useNavigate()
    const { t } = useTranslation()

    useEffect(() => {
        loadUser()
    }, [])

    useEffect(() => {
        if (userFound) {
            setUserData({
                _id: userFound._id,
                email: userFound.email,
                username: userFound.username,
                firstName: userFound.firstName,
                lastName: userFound.lastName,
                avatar: userFound.avatar
            })
        }
    }, [userFound])

    const loadUser = () => {
        userService
            .getOneUser(id)
            .then(res => setUserFound(res.data))
            .catch(err => console.log(err))
    }

    const handleInputChange = e => {
        const { value, name } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const handleFileUpload = e => {
        setLoadingImage(true)
        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setUserData({ ...userData, avatar: res.data.cloudinary_url })
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }


    const handleSubmit = e => {
        e.preventDefault()

        userService
            .editOneUser(id, userData)
            .then(() => navigate(navigatePath))
            .catch(err => console.log(err))
    }
    if (!userData) {
        return <Loader />
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2 className={`${variant === 'light' ? 'text-gray-900' : 'text-white'} text-left font-bold tracking-wider mb-4`}>{t("edit_profile")}</h2>

                <div className="flex justify-between gap-4">
                    <div className="mb-3" controlId="firstName">
                        <label className={``
                        }>
                            {t("name")}
                        </label>
                        <input
                            className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md
                         bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50
                          ${variant === 'light'
                                    ? 'placeholder-dark-grafitti bg-person-input-light'
                                    : 'placeholder-white bg-person-input-dark'
                                }`
                            }
                            type="text"
                            value={userData.firstName}
                            onChange={handleInputChange}
                            name="firstName" />

                        <div className="mb-3" controlId="lastName">
                            <label>{t("surname")}</label>
                            <input
                                className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md
                         bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50
                          ${variant === 'light'
                                        ? 'placeholder-dark-grafitti bg-person-input-light'
                                        : 'placeholder-white bg-person-input-dark'
                                    }`
                                }
                                type="text"
                                value={userData.lastName}
                                onChange={handleInputChange}
                                name="lastName" />
                        </div>
                    </div>

                    <div className="mb-3" controlId="username">
                        <label>{t("username")}</label>
                        <input
                            className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50
                                ${variant === 'light'
                                    ? 'placeholder-dark-grafitti bg-person-input-light'
                                    : 'placeholder-white bg-person-input-dark'
                                }`
                            }
                            type="text"
                            value={userData.username}
                            onChange={handleInputChange}
                            name="username" />
                    </div>
                </div>

                <div className="mb-3 flex flex-col" controlId="avatar">
                    <label>Avatar</label>
                    <input
                        className={`bg-transparent border-none shadow-md outline-none focus:bg-gray-600 focus:bg-opacity-50 
                                 ${variant === 'light'
                                ? 'text-dark-grafitti'
                                : 'text-white'
                            }`
                        }
                        type="file"
                        onChange={handleFileUpload} />
                </div>

                <div className="flex justify-between gap-4">

                    <div className="flex-grow">
                        <div className="mb-3" controlId="email">
                            <label>Email</label>
                            <input
                                className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50 
                                 ${variant === 'light'
                                        ? 'placeholder-dark-grafitti bg-email-input-light'
                                        : ' placeholder-white bg-email-input-dark'
                                    }`
                                }
                                type="email"
                                value={userData.email}
                                onChange={handleInputChange}
                                name="email" />
                        </div>
                    </div>
                    <div className="flex-grow">
                        <div className="mb-3" controlId="phone">
                            <label>{t('phone_number')}</label>
                            <input
                                className={`w-full bg-transparent border-none shadow-md outline-none p-2 rounded-md 
                        bg-no-repeat bg-right-10-center bg-20 focus:bg-gray-600 focus:bg-opacity-50 
                        ${variant === 'light'
                                        ? 'placeholder-dark-grafitti bg-phone-input-light'
                                        : ' placeholder-white bg-phone-input-dark'
                                    }`
                                }
                                type="tel"
                                value={userData.phone}
                                onChange={handleInputChange}
                                name="phone"
                            />
                        </div>

                    </div>
                </div>
                <div className="flex justify-end">
                    <button
                        className={`font-bold border-none rounded-lg shadow-md transition-all duration-300 mr-0 mt-6 w-36 p-1 
                        hover:bg-highlight-coral hover:text-white 
                        ${variant === 'light'
                                ? 'bg-secondary-green text-white'
                                : 'bg-white text-secondary-green'
                            }`
                        }
                        type="submit"
                        disabled={loadingImage}
                    >
                        {loadingImage ? 'Loading image...' : `${t('update')}`}
                    </button>
                </div>

            </form>
        </div>
    )
}

export default EditUser