import React from "react";
import "./body.scss";
import {
  CircularProgress,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from "@material-ui/core";

const Body = ({ type, setType, places }) => {
  console.log(places);
  return (
    <div className="body">
      <div className="intro">
        <h2>Welcome to Cruise Trips</h2>
        <p>...your favourite travel advisor app</p>
      </div>
      <div className="main">
        <p>
          Discover and Explore Amazing Restuarants, Hotel and ttractive resorts
        </p>
      </div>

      <FormControl className="formControl" fullWidth>
        <InputLabel>Type</InputLabel>
        <Select value={type} onChange={(e) => setType(e.target.value)}>
          <MenuItem value="restaurants">Restaurants</MenuItem>
          <MenuItem value="hotels">Hotels</MenuItem>
          <MenuItem value="attractions">Attractions</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Body;
