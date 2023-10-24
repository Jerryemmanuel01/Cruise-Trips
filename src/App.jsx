import { useEffect, useState } from "react";
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import { CssBaseline } from "@material-ui/core";
import { getAdvisor, getPlace } from "./apis/Api";
import CardDetails from "./components/Carddetails/CardDetails";

function App() {
  const [type, setType] = useState("restaurants");
  const [city, setCity] = useState("lagos");
  const [loading, setLoading] = useState(false);

  const [coordinates, setCoordinates] = useState({
    // lng: 3.34205,
    // lat: 6.59651,
  });
  const [places, setplaces]= useState([]);

  
  useEffect(() => {
    getPlace(city).then((data)=>{
      const longitude = data.lon;
      const latitude = data.lat
      
      setCoordinates({lng:longitude, lat:latitude})
      
    })
  }, [city])
  
 useEffect(() => {
    setLoading(true)
    getAdvisor(coordinates.lng, coordinates.lat, type).then((data) =>{
      setplaces(data);
      setLoading(false)
    })
  },[coordinates, type]) 

  console.log(places);

  return (
    <>
      <CssBaseline />
      <Header 
        city={city}
        setCity={setCity}
      />
      <Body
        type={type}
        setType={setType}
        places={places}
        loading={loading}
      />
    </>
  )
}

export default App
