import React from 'react'
import axios from 'axios'

function Effect() {


    const [Data, setData] = React.useState<any>()
  
    const Get = (e: any) => {
        axios.get(
            `http://api.weatherapi.com/v1/current.json?key=8898b81794614021ae900603230802&q=${e}&aqi=no`
          )
          .then((res) => {
            setData(res.data);
          })
      };

  return (
    <div>
        <div className='div-select'>
          <select className='selct' onChange={e=> Get(e.target.value)}>
    <option value='Rafha' >Rafha</option>
    <option value='Riyadh' >Riyadh</option>
    <option value='Jeddah'>Jeddah</option>
    <option value='London'>London</option>
    <option value='Dammam'>Dammam</option>
    <option value='Abha'>Abha</option>
    <option value='Mecca'>Mecca</option>
        </select>
        </div>
        
        <div className="center2">
      {Data != undefined ? (
        <div className="app-wrap">
  <header>

  </header>

  <main>
    <section className="location">
      <div className="city">{'Wheather in ' + Data.location.name + ':'}</div>
      <div className="img"><img src={Data.current.condition.icon}></img></div>
    </section>

    <div className="current">
      <div className="temp">Temp: {Data.current.temp_c} C</div>
      <div className="weather">Humidity: {Data.current.humidity}%</div>
      <div className="hi-low">Wind speed: {Data.current.wind_kph}km/h</div>
    </div>
  </main>
</div>
      ) : (
        <span></span>
      )}
    </div>
    </div>
  )
}

export default Effect
