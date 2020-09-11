import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Countries from './components/Countries'
function App() {

    const [filter, setFilter] = useState("");
    const [countries, setCountries] = useState([]);
    const handleFilterChange = (e) =>{
        setFilter(e.target.value);
    }

    useEffect(()=>{
        axios.get('https://restcountries.eu/rest/v2/all')
            .then(response=>{
                setCountries(response.data);
            })
    },[])

    return (
        <div>
            find countries <input value = {filter} onChange={handleFilterChange}></input>
           <Countries countries = {countries.filter( c => c.name.toLowerCase().includes(filter.toLowerCase()))}/>
        </div>
    );
}


export default App;
