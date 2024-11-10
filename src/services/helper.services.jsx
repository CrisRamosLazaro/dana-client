import axios from 'axios'

class HelperServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/helper`
        })
    }

    editOnehelper(id, helperData) {
        return this.api.put(`/edit/${id}`, helperData)
    }

    deleteOnehelper(id) {
        return this.api.delete(`/delete/${id}`)
    }
}

const helperServices = new HelperServices()

export default helperServices