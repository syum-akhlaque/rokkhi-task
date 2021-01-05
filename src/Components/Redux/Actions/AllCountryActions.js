import {COUNTRY_REQUEST, GET_COUNTRY_SUCCESS, GET_COUNTRY_FAILED} from '../Types'
import axios from 'axios'

export const allCountryList = ()=>{
    return(dispatch) => {
        dispatch({
            type: COUNTRY_REQUEST,
        })
        const res = axios.get('https://restcountries.eu/rest/v2/all')
        .then( res =>{
            console.log(res.data)
            dispatch({
                type: GET_COUNTRY_SUCCESS,
                payload: res.data
            })
        })
        .catch( error =>{
            dispatch({
                type: GET_COUNTRY_FAILED,
                payload: error.message
            })
        } )
    }
}