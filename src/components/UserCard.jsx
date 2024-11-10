import { useTranslation } from "react-i18next"
import Button from "./Atoms/Button"
import itemUrls from "@/consts/itemsUrls"

const UserCard = ({ userData, showBuyButtons, variant }) => {

    const { t } = useTranslation()

    const handleBuyClick = (url) => {
        window.open(url, '_blank')
    }

    const { firstName, lastName, affectedId } = userData
    const { neededItems } = affectedId || {}

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white dark:bg-gray-800">

            <div className="font-bold text-xl mb-2">
                {firstName} {lastName}
            </div>

            <p className="text-gray-700 dark:text-gray-300 text-base">
                {t('needed_items')}:
            </p>

            <ul className="list-disc list-inside">
                {neededItems && Object.entries(neededItems).map(([key, value]) => (
                    <li key={key}>
                        {t(key)}: {value ? t('yes') : t('no')}
                        {showBuyButtons && value && (
                            <Button
                                onClick={() => handleBuyClick(itemUrls[key])}
                                text={t('buy')}
                                className="ml-2"
                            />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UserCard