import SearchBox from "./searchBox"
import InformationCard from "./informationCard"
import { useState } from "react"
import "./weatherApp.css";
export default function WeatherApp(){
    let [cityInfo,setcityInfo]=useState({});
    let updateCity=(info)=>{
        setcityInfo(info)
    };
    let style={
        margin:"0 0 10px",
        textAlign:"center",
        color:"white"

    }
    return(
        <div className="weather">
              <h1 style={style}>weather app</h1>
        <SearchBox updateCity={updateCity}/>
        <InformationCard info={cityInfo}/>
       
        </div>
    )
}