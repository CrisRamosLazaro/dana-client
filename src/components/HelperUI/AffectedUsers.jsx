import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import userService from "../../services/user.services"
import UserCard from "../UserCard"
import Loader from '../Loader'

const AffectedUsers = () => {
    const { t } = useTranslation()
    const [affectedUsers, setAffectedUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchAffectedUsers = async () => {
            try {
                const { data } = await userService.getAffectedUsers()
                setAffectedUsers(data)
                setLoading(false)
            } catch (error) {
                console.error('Error fetching affected users:', error)
                setLoading(false)
            }
        }

        fetchAffectedUsers()
    }, [])

    if (loading) {
        return <Loader />
    }

    return (
        <div>
            <h2 className='font-bold text-xl mb-2'>{t('affected_people')}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
                {affectedUsers.map(user => (
                    <UserCard key={user._id} userData={user} showBuyButtons={true} />
                ))}
            </div>
        </div>
    )
}

export default AffectedUsers