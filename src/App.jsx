import { useEffect, useState } from "react";
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import { CssBaseline } from "@material-ui/core";
import { getPlace } from "./apis/Api";

function App() {
  const [type, setType] = useState("restaurants");
  const [city, setCity] = useState("lagos");

  console.log(city);

  useEffect(() => {
    getPlace(city).then((data)=>{
      console.log(data);
    })
  }, [city])
  

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
      />
    </>
  )
}

export default App
