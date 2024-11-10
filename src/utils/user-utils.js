import userService from '../services/user.services'

export const loadUser = async (userId) => {
    try {
        const response = await userService.getOneUser(userId)
        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
}
