import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import affectedServices from "@/services/affected.services"
import Loader from "./Loader"

const NeededItemsCount = () => {

    const { t } = useTranslation()

    const [neededItemsCount, setNeededItemsCount] = useState({})
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchNeededItemsCount = async () => {
            try {
                const { data } = await affectedServices.getNeededItemsCount()
                setNeededItemsCount(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching needed items count:', error)
                setLoading(false)
            }
        }

        fetchNeededItemsCount()
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div className="">
            <h2 className='font-bold text-xl mb-2'>{t('total_needed')}</h2>
            <ul>
                {Object.entries(neededItemsCount).map(([key, count]) => (
                    <li key={key}>
                        {t(key)}: {count}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default NeededItemsCount