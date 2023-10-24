import React from "react";
import "./body.scss";
import { InputLabel, MenuItem, FormControl, Select } from "@mui/material";
import CardDetails from "../Carddetails/CardDetails";

const Body = ({ type, setType, places, loading, cityInfo }) => {
  return (
    <>
      <div className="body">
        <div className="intro">
          <h2>Welcome to Cruise Trips</h2>
          <p>...your favourite travel advisor app</p>
        </div>
        <div className="main">
          <p>
            Discover and Explore Amazing Restuarants, Hotel and ttractive
            resorts
          </p>
        </div>

        <FormControl className="formControl" fullWidth>
          <InputLabel>Type</InputLabel>
          <Select
            value={type}
            onChange={(e) => setType(e.target.value)}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Type"
          >
            <MenuItem value="restaurants">Restaurants</MenuItem>
            <MenuItem value="hotels">Hotels</MenuItem>
            <MenuItem value="attractions">Attractions</MenuItem>
          </Select>
        </FormControl>
      </div>
      <CardDetails places={places} loading={loading} cityInfo={cityInfo} />
    </>
  );
};

export default Body;
