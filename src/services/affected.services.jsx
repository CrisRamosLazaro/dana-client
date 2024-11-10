import axios from 'axios'

class AffectedServices {

    constructor() {
        this.api = axios.create({
            baseURL: `${import.meta.env.VITE_API_URL}/affected`
        })
    }

    getNeededItemsCount() {
        return this.api.get('/getNeededItemsCount')
    }

}
const affectedServices = new AffectedServices()

export default affectedServices