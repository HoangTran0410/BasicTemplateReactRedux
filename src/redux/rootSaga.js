import { all } from 'redux-saga/effects'
import tourProgramSaga from './TourProgram/saga'

export default function* rootSaga() {
    yield all([tourProgramSaga()])
}
