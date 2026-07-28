import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {sand,dust,haze,mist,clearSky,brokenCloud,thunderstorm,lightRain,heavyRain,winterUrl,smokeUrl,cloudOvercast,fewClouds} from "./appAssets";
import "./informationCard.css";
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import CloudIcon from '@mui/icons-material/Cloud';
import AirIcon from '@mui/icons-material/Air';
export default function InformationCard({info}){
  let isCloudOvercast=info.id==804;
  let isCloudBroken=info.id==803;
  let isFewClouds=info.description=="few clouds";
  let isClearSky=info.id==800;
  let isMist=info.id==701;
  let isLightRain=info.id==500||info.id==501;
  let isHeavyRain=info.id>501&&info.id<535;
  let isWinter=info.temp<15;
    let isThunderStorm=info.id>199&&info.id<240;
  let isSmoke=info.id==711;
  let isHaze=info.id==721;
  let isDust=info.id==731||info.id==761;
  let isSand=info.id==751;

  
    return (
        <div className='infobox'>
            <h1 style={{color:"white"}}>weatherInfo: {info.description}</h1>
            <div className=''>
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={isCloudBroken?brokenCloud:isCloudOvercast?cloudOvercast:isDust?dust:isHaze?haze:isHeavyRain?heavyRain:isLightRain?lightRain:isMist?mist:isSand?sand:isSmoke?smokeUrl:isThunderStorm?thunderstorm:isWinter?winterUrl:isClearSky?clearSky:isFewClouds?fewClouds:clearSky}
        title="green iguana"
      />
      <CardContent  >
        <Typography gutterBottom variant="h5" component="div" >
          {info.name}&nbsp;
              {isCloudBroken?<CloudIcon style={{color:"skyBlue"}}/>:isCloudOvercast?<CloudIcon style={{color:"skyBlue"}}/>:isDust?<AirIcon/>:isHaze?<AcUnitIcon style={{color:"#8AA3B7"}}/>:isHeavyRain?<ThunderstormIcon style={{color:"#B0BEC5"}}/>:isLightRain?<ThunderstormIcon style={{color:"#B0BEC5"}}/>:isMist?<AcUnitIcon/>:isSand?<AirIcon/>:isSmoke?<AcUnitIcon/>:isThunderStorm?<ThunderstormIcon style={{color:"#B0BEC5"}}/>:isWinter?<AcUnitIcon style={{color:"#8AA3B7"}}/>:isClearSky?<SunnyIcon style={{color:"#FFCC33"}}/>:isFewClouds?<SunnyIcon style={{color:"#FFCC33"}}/>: <SunnyIcon style={{color:"#FFCC33"}}/>}
     
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component="span">
      <p>Temperature = {info.temp}&deg;C</p>
      <p>Humidity = {info.humidity}</p>
        <p>Max Temperature = {info.temp_max}&deg;C</p>
          <p>Min Temperature = {info.temp_min}&deg;C</p>
            <p>The weather can be described as <b><i>{info.description} </i></b>and feels like {info.feelslike}&deg;C</p>
            
        </Typography>
       
      </CardContent>
      
     
    </Card>
    </div>
    </div>
  );
}