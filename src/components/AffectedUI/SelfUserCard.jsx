import { useContext, useEffect, useState } from "react"
import { AuthContext } from '@/contexts/auth.context'
import { ThemeContext } from '@/contexts/theme.context'
import userService from "@/services/user.services"
import UserCard from "../UserCard"

const SelfUserCard = ({ variant }) => {

    const { user } = useContext(AuthContext)
    const [userData, setUserData] = useState({})

    const loadUser = async () => {
        try {
            const { data } = await userService.getOneUser(user._id)
            setUserData(data)

        } catch {
            console.error(err)
        }
    }

    useEffect(() => {
        loadUser()
    }, [])

    return (
        <UserCard
            userData={userData}
            showBuyButtons={false}
            variant={variant}
        />
    )
}

export default SelfUserCard