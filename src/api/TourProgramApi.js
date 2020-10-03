import Axios from '../libs/axios'

const TourProgramApi = {
    get: async () => {
        const response = await Axios.get('tourprogram')
        return response
    },
}

export default TourProgramApi
