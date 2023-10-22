import axios from "axios";

export const getPlace = async (city) => {
  try {
    const {data : data} = await axios.get(
      "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname",
      {
        params: { name: city },
        headers: {
          "X-RapidAPI-Key":
            "5f954b434cmshefcc720d7b2460ep1b33b5jsn2cffe2f31170",
          "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
        },
      }
    );
    return data
  } catch (error) {
    console.error(error);
  }
};
