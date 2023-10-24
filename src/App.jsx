import { useEffect, useState } from "react";
import Body from "./components/Body/Body";
import Header from "./components/Header/Header";
import { CssBaseline } from "@material-ui/core";
import { getAdvisor, getPlace } from "./apis/Api";

function App() {
  const [type, setType] = useState("restaurants");
  const [city, setCity] = useState("lagos");
  const [cityInfo, setCityInfo] = useState({});
  const [loading, setLoading] = useState(false);

  const [coordinates, setCoordinates] = useState({});
  const [places, setplaces] = useState([]);

  useEffect(() => {
    getPlace(city).then((data) => {
      const longitude = data.lon;
      const latitude = data.lat;
      setCityInfo(data)
      setCoordinates({ lng: longitude, lat: latitude });
    });
  }, [city]);

  useEffect(() => {
    setLoading(true);
    getAdvisor(coordinates.lng, coordinates.lat, type).then((data) => {
      setplaces(data?.filter((place) => place.name && place.num_reviews > 0));
      setLoading(false);
    });
  }, [coordinates, type]);

  return (
    <>
      <CssBaseline />
      <Header city={city} setCity={setCity} />
      <Body type={type} setType={setType} places={places} loading={loading} cityInfo={cityInfo}/>
    </>
  );
}

export default App;
