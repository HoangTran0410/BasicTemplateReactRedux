import { combineReducers } from 'redux'
import TourProgramReducer from './TourProgram/reducer'
import TourTypeReducer from './TourType/reducer'

const rootReducer = combineReducers({
    tourProgram: TourProgramReducer,
    tourType: TourTypeReducer,
})

export default rootReducer
