import { FETCH_TOUR_PROGRAMS_SUCCESS } from './constant'

export default function TourProgramReducer(state = [], { type, payload }) {
    switch (type) {
        case FETCH_TOUR_PROGRAMS_SUCCESS:
            return payload

        default:
            return state
    }
}
