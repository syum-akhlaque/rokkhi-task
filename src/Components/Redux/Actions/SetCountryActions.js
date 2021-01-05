import {NEW_SELECTED_COUNTRY} from '../Types'

export const SELECTED_COUNTRY = (countryName, language)=>{
    const selectedCountryInfo = {
        countryName : countryName,
        language: language
    }
    return{
        type: NEW_SELECTED_COUNTRY,
        payload: selectedCountryInfo,
    }
}

