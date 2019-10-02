import React from "react";
import PropTypes from "prop-types";

function Weather(props) {
    const { location, weather } = props;
    // const temperatureData = list.map((d, i) => {
    //   return { day: i, value: d.main.temp };
    // });
    // const pressureData = list.map((d, i) => {
    //   return { day: i, value: d.main.pressure };
    // });
    // const humidityData = list.map((d, i) => {
    //   return { day: i, value: d.main.humidity };
    // });
    return (
      <div className={"weather row"}>
        <div className="col s12">
          <h3>{`${location.name}, ${location.country}`}</h3>
          <h3>{`${weather.temp_c}, ${weather.condition.text}, ${weather.condition.icon}`}</h3>
        </div>    
      </div>
    );
  }
  
  Weather.propTypes = {
    city: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      coord: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lon: PropTypes.number.isRequired
      }),
      country: PropTypes.string.isRequired,
      population: PropTypes.number.isRequired
    }).isRequired,
    list: PropTypes.arrayOf(PropTypes.object)
  };
  
  export default Weather;