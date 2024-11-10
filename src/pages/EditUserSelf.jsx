import EditUser from "../components/EditUser"

const EditUserSelf = () => {

    return (
        <div className="relative flex flex-col justify-center items-center h-screen">
            <EditUser
                navigatePath="/profile"
            />
        </div>
    )
}

export default EditUserSelf