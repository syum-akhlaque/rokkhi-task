import { combineReducers } from 'redux'

import AllCountryReducers from './AllCountryReducers'
import SetCountryReducers from './SetCountryReducers'

export default combineReducers({
     SetCountryReducers,
     AllCountryReducers
})