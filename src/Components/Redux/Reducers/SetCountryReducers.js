import {NEW_SELECTED_COUNTRY} from '../Types'

const initialState = {
    name: ''
}
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case NEW_SELECTED_COUNTRY:
           return{
               selectedCountryInfo: action.payload
           }
        default:
            return state
    }
}