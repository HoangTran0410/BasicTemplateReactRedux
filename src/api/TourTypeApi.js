import Axios from '../libs/axios'

const TourTypeApi = {
    get: async () => {
        const response = await Axios.get('tourtype')
        return response
    },
}

export default TourTypeApi
