import React from "react";
import PropTypes from "prop-types";
import Weather from "./Weather";

const Homepage = props => {
    return (
     <div>
     {props.data.map(d => {
        return <Weather location={d.location} weather={d.weather} />;
      })}
    </div>
    );
  };
  
  Homepage.propTypes = {
    data: PropTypes.arrayOf(
      PropTypes.shape({
        location: PropTypes.object.isRequired,
        weather: PropTypes.object.isRequired
      })
    ).isRequired
  };


  export default Homepage;
