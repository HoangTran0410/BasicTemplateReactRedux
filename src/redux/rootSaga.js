import { all } from 'redux-saga/effects'
import tourProgramSaga from './TourProgram/saga'
import tourTypeSaga from './TourType/saga'

export default function* rootSaga() {
    yield all([tourProgramSaga(), tourTypeSaga()])
}
