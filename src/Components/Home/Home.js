import React, { useEffect, useState } from 'react';
import CountryList from './CountryList';

const Home = () => {
    const [country, setCountry]= useState([])
    useEffect( ()=> {
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => setCountry(data)); 
        
    },[])
    console.log(country)
    return (
        <div>
            <h1 className='text-center my-5'> Select Country Name</h1>
           
            { //-----Show all Country List ----
                country.map( country => <CountryList key={country._id} country={country} ></CountryList> )
            }   

        </div>
    );
};

export default Home;