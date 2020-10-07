import { call, put, all, takeLatest, takeEvery } from 'redux-saga/effects'

import { fetchTourProgramsSuccess } from './action'
import TourProgramApi from '../../api/TourProgramApi'
import { CREATE_TOUR_PROGRAMS, FETCH_TOUR_PROGRAMS } from './constant'

function* fetchTourPrograms() {
    try {
        const data = yield call(TourProgramApi.get)
        yield put(fetchTourProgramsSuccess(data))
    } catch (error) {
        console.log('error:', error.message)
    }
}

function* createTourProgram({ payload }) {
    try {
        yield call(TourProgramApi.createTourProgram, payload)
        yield put({ type: FETCH_TOUR_PROGRAMS })
        global.Modal.close()
    } catch (error) {
        console.log('error:', error.message)
    }
}

export default function* tourProgramSaga() {
    yield all([
        yield takeLatest(FETCH_TOUR_PROGRAMS, fetchTourPrograms),
        yield takeEvery(CREATE_TOUR_PROGRAMS, createTourProgram),
    ])
}
