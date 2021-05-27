import "./App.css";
import {useState} from "react";
import axios from "axios";
import DailyWeather from "./components/DailyWeather";
import CurrentWeather from "./components/CurrentWeather";
import ChangeCityFormComponent from "./components/ChangeCityFormComponent"
import Header from "./components/Header"
import Geoloc from "./components/Geoloc"

const apikey = process.env.REACT_APP_apiKey;

function App() {
  const [weather, setWeather] = useState({
    data: {
      city_name: "",
      country_code: "",
      data: [{ temp: "", weather: { description: "", icon: "" } }],
    },
  });
  const [loading, setLoading] = useState(true);
  const [loadGeoloc, setloadGeoloc] = useState(true);
  const [coords, setCoords] = useState({lat: 0, lon: 0})
  const [city, setCity] = useState("Paris")

  // par lat et lon
  const coordUrl = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${coords['lat']}&lon=${coords['lon']}&key=${apikey}&days=5`
  
  
  // par name
  const cityRequestUrl =
    `https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&days=5&key=${apikey}`;

async function handleGeolocation() {
      navigator.geolocation.getCurrentPosition((data)=> {
       setCoords({lat: data.coords.latitude, lon: data.coords.longitude})
     })    
     setloadGeoloc(false)  
} 


async function getData(mode: string) {
      let queryUrl
      mode === "city"? queryUrl = cityRequestUrl : queryUrl =  coordUrl
        const response = await axios.get(queryUrl);
        /* Quick catch if the user input its not a city  */ 
        if (response.status === 200) {
          setWeather(response);
          setLoading(false);
        } else {
          alert("The city that has been submited couldn't be found ")
        }
}


if (loadGeoloc) {
    handleGeolocation()
    console.log(coords)
    getData("coord")
}

if (loading) {
  getData("city");
}

// -------- CHANGE CITY MANUALLY -------- // 
const handleCityChange = (requestCity: string) => {
  console.log(city)
  if (city !== "") { 
    setCity(requestCity)
    setLoading(true)
    getData("city")
     } else {
        alert("City name cannot be empty")
     }

   }
  
  // ----- GEOLOCATION ----------- //
   const handleGeoRequest = () => {
     setloadGeoloc(true)
   }

 return (
    <>
    <div className="App">
      <Header/>
      
        {!loading && <CurrentWeather todaySource={weather.data} />}

        {/* 5 Next days */}
        
        <main className="next-days">
          <DailyWeather source={0} />
            {!loading && weather.data.data.map(distData => <DailyWeather source={distData} /> )}
      </main>
    </div>

      {/* Change City  Component */}
      <section id="changecity-fc">

      <ChangeCityFormComponent handleSubmit={handleCityChange} />
      
        {/* Geolocation Component */}
        <Geoloc action={handleGeoRequest} />

      </section>
    </>
  );
  }

export default App;
