import { combineReducers } from 'redux'
import TourProgramReducer from './TourProgram/reducer'

const rootReducer = combineReducers({
    tourProgram: TourProgramReducer,
})

export default rootReducer
