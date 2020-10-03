import { FETCH_TOUR_PROGRAMS, FETCH_TOUR_PROGRAMS_SUCCESS } from './constant'

export const fetchTourProgramsAction = () => ({
    type: FETCH_TOUR_PROGRAMS,
})

export const fetchTourProgramsSuccess = (data) => ({
    type: FETCH_TOUR_PROGRAMS_SUCCESS,
    payload: data,
})
