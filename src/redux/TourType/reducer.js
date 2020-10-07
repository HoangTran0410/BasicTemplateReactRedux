import { FETCH_TOUR_TYPES_SUCCESS } from './constant'

export default function TourTypeReducer(state = [], { type, payload }) {
    switch (type) {
        case FETCH_TOUR_TYPES_SUCCESS:
            return payload

        default:
            return state
    }
}
