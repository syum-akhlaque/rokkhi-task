import {COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILED} from '../Types'

const initialState = {
    loading: false,
    country: [],
    error: ''
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action) => {
    switch (action.type) {
        case COUNTRY_REQUEST:
           return{
               ...state,
               loading: true,
           }

        case GET_COUNTRY_SUCCESS:
        return{
            ...state,
            loading: false,
            country: action.payload
        }

        case GET_COUNTRY_FAILED:
            return{
                ...state,
                loading: false,
                country: [],
                error: action.payload
            }
        default:
            return state
    }
}