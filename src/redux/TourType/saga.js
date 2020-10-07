import { call, put, all, takeLatest } from 'redux-saga/effects'

import { fetchTourTypesSuccess } from './action'
import TourTypeApi from '../../api/TourTypeApi'
import { FETCH_TOUR_TYPES } from './constant'

function* fetchTourTourTypes() {
    try {
        const data = yield call(TourTypeApi.get)
        yield put(fetchTourTypesSuccess(data))
    } catch (error) {
        console.log('error:', error.message)
    }
}

export default function* tourTypeSaga() {
    yield all([yield takeLatest(FETCH_TOUR_TYPES, fetchTourTourTypes)])
}
