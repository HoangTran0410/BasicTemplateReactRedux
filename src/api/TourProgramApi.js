import Axios from '../libs/axios'

const TourProgramApi = {
    get: async () => {
        const response = await Axios.get('tourprogram')
        return response
    },

    getTourProgramDetailById: async (id) => {
        const response = await Axios.get(`tourprogram/${id}`)
        return response
    },
}

export default TourProgramApi
