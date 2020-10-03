import { call, put, all, takeLatest } from 'redux-saga/effects'

import { fetchTourProgramsSuccess } from './action'
import TourProgramApi from '../../api/TourProgramApi'
import { FETCH_TOUR_PROGRAMS } from './constant'

function* fetchTourPrograms() {
    try {
        const data = yield call(TourProgramApi.get)
        yield put(fetchTourProgramsSuccess(data))
    } catch (error) {
        console.log('error:', error.message)
    }
}

export default function* tourProgramSaga() {
    yield all([yield takeLatest(FETCH_TOUR_PROGRAMS, fetchTourPrograms)])
}
