import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import "./searchbox.css";
export default function SearchBox({updateCity}){
    let [city,setcity]=useState("");
    let [err,seterr]=useState(false);
    
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
        const API_KEY="79c6210f8aac0a8b11faa69d80f18e20";
    let fetchWeather=async()=>{
        try{
        let weather=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);

        let jsonWeather=await weather.json();
        return{
            feelslike:jsonWeather.main.feels_like,
            humidity:jsonWeather.main.humidity,
            temp:jsonWeather.main.temp,
            temp_max:jsonWeather.main.temp_max,
            temp_min:jsonWeather.main.temp_min,
            name:jsonWeather.name,
            description:jsonWeather.weather[0].description,
            id:jsonWeather.weather[0].id,
            main:jsonWeather.weather[0].main
        
    };
}
catch(err){
    throw err;
}
    }
    
    function handleChange(event){
        setcity(event.target.value);
    }
    async function handleSubmit(event){
        try{
        event.preventDefault();
        let info=await fetchWeather();
        
        updateCity(info);
        setcity("");
        seterr(false);
        }catch(err){
            seterr(true);
            setcity("");
        }
        
    }
    return (
        <div >
            <form className='form' onSubmit={handleSubmit}>
                <TextField label="Enter City" id="searchbox" color="primary" className='textfield' value={city} onChange={handleChange}/>
                {err&&<p style={{color:"red"}}>location doesn't exist in our Api</p>}
                
                 <Button className='formbutton' variant="contained" type="submit" >Search</Button>
            </form>
        </div>
    )
}