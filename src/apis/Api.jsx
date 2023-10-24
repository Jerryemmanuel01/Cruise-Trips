import axios from "axios";

export const getPlace = async (city) => {
  try {
    const { data: data } = await axios.get(
      "https://opentripmap-places-v1.p.rapidapi.com/en/places/geoname",
      {
        params: { name: city },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_CRUISETRIPS_KEY_NEW,
          "X-RapidAPI-Host": "opentripmap-places-v1.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getAdvisor = async (lng, lat, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-by-latlng`,
      {
        params: {
          latitude: lat,
          longitude: lng,
        },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_CRUISETRIPS_KEY_NEW,
          "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
        },
      }
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
