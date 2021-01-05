import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { SELECTED_COUNTRY } from '../Redux/Actions/SetCountryActions';

const CountryList = (props) => {
    const history = useHistory()
   const {name, languages} = props.country || ''
   const handleCountryLanguage = ()=>{
        SELECTED_COUNTRY(name, languages)
        history.push({ 
            pathname: '/selectedCountry',
            state : {
                name : name,
                languages: languages
            }
        });
    }
    
    return (
        <p className='mx-5 cursor-pointer' onClick = {handleCountryLanguage}>{name}</p>      
    );
};

export default connect( SELECTED_COUNTRY ) (CountryList);