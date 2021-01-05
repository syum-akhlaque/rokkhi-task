import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CountryList from './CountryList';
import {allCountryList} from '../Redux/Actions/AllCountryActions'

const Home = ({allCountryList, loading, country, error}) => {
  
    useEffect( () => {
        allCountryList()
    }, [])
   
    return (
        <div>
            <h1 className='text-center my-5'> Select Country Name</h1>
           
            { //-----Show all Country List ----
                country.map( country => <CountryList key={country._id} country={country} ></CountryList> )
            }   

        </div>
    );
};
const mapStateToProps = state => 
(
    {
        loading: state.AllCountryReducers.loading,
        country: state.AllCountryReducers.country,
        error: state.AllCountryReducers.error
    }
    
)
export default connect(mapStateToProps, {allCountryList}) (Home);