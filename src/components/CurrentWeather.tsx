import React from "react";

export default function CurrentWeather({ todaySource }: any) {
  let date = new Date();
  const iconUrl = "https://www.weatherbit.io/static/img/icons/";
  return (
    <div>

      <h3> {date.toDateString()} </h3>
  
        <div className="important-info">
 
          <p className="current-temperature"> 
           {todaySource.data[0].temp} 
           </p>
           <span style={{flexDirection: 'row'}}> 
                 {/* CITY NAME */}
           <h4> {todaySource.city_name + ", " + todaySource.country_code} </h4>
           <h4>{todaySource.data[0].weather.description}</h4>
           </span>
           <img
        src={iconUrl + todaySource.data[0].weather.icon + ".png"}
        className="main-icon" alt="source data icon"
      />
 
        </div>

     
  
      {/* DATA TODAY */}
      <hr></hr>
    </div>
  );
}
