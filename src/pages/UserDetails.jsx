import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import userService from "../services/user.services"
import Loader from "../components/Loader"

const UserDetails = () => {
    const { id } = useParams()
    const [users, setUsers] = useState()
    useEffect(() => {
        loadUser()
    }, [])
    const loadUser = () => {
        userService
            .getOneUser(id)
            .then(({ data }) => setUsers(data))
            .catch(err => console.log(err))
    }
    return (
        <div className="relative flex flex-col justify-center items-center h-screen">
            {
                !users
                    ?
                    <Loader />
                    :
                    <>
                        <h1>Detalles de {users.firstName} {users.lastName}</h1>
                        <hr />

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-1/3">
                                <img src={users.avatar} style={{ width: '100%' }} alt="tu foto" />
                            </div>
                            <div className="w-full md:w-1/3 md:ml-12">
                                <h1>{users.username}</h1>
                            </div>
                        </div>
                    </>
            }
        </div>
    )
}
export default UserDetails