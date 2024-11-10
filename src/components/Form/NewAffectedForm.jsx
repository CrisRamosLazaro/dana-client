import { useTranslation } from 'react-i18next'
import affectedFields from '@/consts/affectedFields'
import FormField from "./FormField"
import Checkbox from '../Atoms/Checkbox'
import getThemedClasses from '@/consts/themedClasses'
import uploadServices from '@/services/upload.services'

const NewAffectedForm = ({
    initialAffectedData,
    setSignUpData,
    setLoadingImage,
    onChange,
    error,
    variant
}) => {

    const { t } = useTranslation()

    const handleNeedSelection = (event, need) => {

        const { checked } = event.target

        setSignUpData(prevState => ({
            ...prevState,
            affectedData: {
                ...prevState.affectedData,
                neededItems: {
                    ...prevState.affectedData.neededItems,
                    [need.id]: checked
                }
            }
        }))
    }

    const handleFileUpload = e => {

        setLoadingImage(true)

        const formData = new FormData()
        formData.append('imageData', e.target.files[0])

        uploadServices
            .uploadImage(formData)
            .then(res => {
                setSignUpData(prevState => ({
                    ...prevState,
                    affectedData: {
                        ...prevState.affectedData,
                        utilityBill: {
                            url: res.data.cloudinary_url
                        }
                    },
                }))
                setLoadingImage(false)
            })
            .catch(err => {
                console.log(err)
                setLoadingImage(false)
            })
    }

    return (
        <>
            {affectedFields.map(field => {
                const { id, type, placeholder, placeholderIconLight, placeholderIconDark, component, optionsArr, autoComplete } = field
                const label = t(field.label)
                const prefixedName = `affectedData.${id}`

                return (

                    component === 'checkbox' ? (

                        <div key={id} className={`w-full border-none shadow-md outline-none p-2 mt-2 rounded-md 
                        bg-no-repeat bg-right-10-center bg-20
                         ${getThemedClasses(variant)}
                        ${(type === "password" ? passwordIcon : '')}
                        `}>
                            <label>{label}</label>
                            {optionsArr.map(option => (
                                <Checkbox
                                    key={option.id}
                                    label={t(option.label)}
                                    id={option.id}
                                    value={option.id}
                                    type="checkbox"
                                    checked={initialAffectedData.neededItems[option.id] || false}
                                    onChange={(e) => handleNeedSelection(e, option)}
                                    className="custom-checkbox"
                                />
                            ))}
                        </div>

                    ) : component === 'uploader' ?
                        (
                            <FormField
                                key={id}
                                label={t(label)}
                                htmlFor={id}
                                id={id}
                                placeholder={t(placeholder)}
                                type={type}
                                name={prefixedName}
                                autoComplete={autoComplete}
                                onChange={handleFileUpload}
                                error={t(error?.[id])}
                                placeholderIconLight={placeholderIconLight}
                                placeholderIconDark={placeholderIconDark}
                                variant={variant}
                            />
                        )
                        : (
                            <FormField
                                key={id}
                                label={t(label)}
                                htmlFor={id}
                                id={id}
                                placeholder={t(placeholder)}
                                type={type}
                                value={initialAffectedData[id] || ""}
                                name={prefixedName}
                                autoComplete={autoComplete}
                                onChange={onChange}
                                error={t(error?.[id])}
                                placeholderIconLight={placeholderIconLight}
                                placeholderIconDark={placeholderIconDark}
                                variant={variant}
                            />
                        )
                )
            })}
        </>
    )
}

export default NewAffectedForm