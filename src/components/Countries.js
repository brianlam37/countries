import React,{useState, useEffect} from 'react';
import axios from 'axios'
import Weather from './Weather'

const Countries = ({countries}) =>{

    if(countries.length === 1){
        let c = countries[0];
        return(       
            <>
                <View c = {c}/>
            </>
        )

    }else if(countries.length > 10){
        return(
            <p>
                Too many matches, specify another filter
            </p>
        );
    }else{
        return(
            <>
                {countries.map(c =>(<div key={c.name}>{c.name}<ViewButton c = {c}/></div>))}
            </>
        );
    }
}
const ViewButton = ({c}) =>{
    const [view, setView] = useState('');
    const [visible, setVisible] = useState(false);
    const handleShowView = () =>{
        setView((<View c = {c}/>));
        if(visible){
            setVisible(false);
        }else{
            setVisible(true);
        }
    }
    if(visible){
        return(
            <>
                <button onClick={handleShowView}>show</button>
                {view}
            </>
        )
    }else{
        return(
            <>
                <button onClick={handleShowView}>show</button>
            </>
        )
    }

}
const View = ({c}) => {
    const [weather, setWeather] = useState([]);
    const api_key = process.env.REACT_APP_API_KEY
    useEffect(()=>{
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${c.capital}`)
            .then(response => {
                setWeather((<Weather captial = {c.capital} weather = {response.data}/>))
            });
            
    },[api_key,c.capital])
    return(       
        <>
            <h1>{c.name}</h1>
            <p>capital {c.capital}</p>
            <p>population {c.population}</p>
            <h3>languages</h3>
            <ul>
                {c.languages.map(l => (<li key = {l.name}>{l.name}</li>))}
            </ul>
            <img src = {c.flag} alt ={`${c.name}'s flag`} style={{height:200}}/>
            <h3>Weather in {c.capital}</h3>
            {weather}
        </>
    )
}

export default Countries;