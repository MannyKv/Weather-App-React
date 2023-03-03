import React, {useState} from "react";
import Weather from "./Weather";

function SearchBar(){
    const [data, setData] = useState([]);
    const [location,setLocation] = useState('');
    const[updatedLoc,setUpdatedLoc] = useState('');

    const getLatAndLong = (updatedLoc)=> {
        return fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${updatedLoc}&limit=1&appid=${process.env.REACT_APP_API_KEY}&=` )
            .then(res => res.json())
            .then(data => ({ lat: data[0].lat, long: data[0].lon }));
    };

    const fetchWeatherData = (lat, long) => {

        fetch(`${process.env.REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${process.env.REACT_APP_API_KEY}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            });

    }

    const handleSearch = (async()=>{
        if (updatedLoc.length === 0) return;
        const { lat, long } = await getLatAndLong(location);
        fetchWeatherData(lat, long);
    });

    return(
        <div>
            <input
                type="text"
                id="message"
                name="message"
                onChange={(event) => {
                    setLocation(event.target.value)}}
                value={location}
            />
            <button onClick={()=>{
                setUpdatedLoc(location);
                handleSearch();

            }}>search</button>

            <div className = "weatherList">  {(typeof data.main != 'undefined') ? ( // if data is undefined return empty div
                <Weather weatherData={data}/>
            ) : (
                <div></div>
            )}</div>
        </div>


    )

}
export default SearchBar;