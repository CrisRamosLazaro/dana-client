import UsersList from "../components/UsersList"
import { useEffect, useState } from "react"
import userService from "../services/user.services"
import Loader from "../components/Loader"

const AdminPage = () => {

    const [users, setUsers] = useState()
    useEffect(() => {
        loadUsers()
    }, [])
    const loadUsers = () => {
        userService
            .getAllUsers()
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }

    return (
        <div className="relative flex flex-col justify-center items-center h-screen">
            <h1>Users</h1>
            <hr />
            <div className="flex flex-wrap">
                {
                    !users
                        ?
                        <Loader />
                        :
                        <UsersList users={users} updateList={loadUsers} />
                }
            </div>
        </div>
    )
}
export default AdminPage