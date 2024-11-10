import { useTranslation } from "react-i18next"

const RoleCard = ({ role, image, text, handlePickUserRole, isSelected }) => {

    const { t } = useTranslation()

    return (
        <div className="flex justify-between items-center my-6 gap-12">
            <div
                className={`shadow-md shadow-brand-green rounded-lg flex flex-col justify-between items-center gap-4 h-48 w-52 py-8 px-2 
                        ${isSelected
                        ? 'bg-brand-green text-white transform translate-y-1'
                        : 'bg-white hover:bg-brand-green hover:bg-opacity-15'} 
                        transition-all duration-200 cursor-pointer`}
                onClick={() => handlePickUserRole(role)}
            >
                <img
                    src={image}
                    alt={t(text)}
                    className="h-[100px] w-36"
                />
                <p>{t(text)}</p>
            </div>
        </div>
    )
}

export default RoleCard