import { FETCH_TOUR_TYPES, FETCH_TOUR_TYPES_SUCCESS } from './constant'

export const fetchTourTypesAction = () => ({
    type: FETCH_TOUR_TYPES,
})

export const fetchTourTypesSuccess = (data) => ({
    type: FETCH_TOUR_TYPES_SUCCESS,
    payload: data,
})
