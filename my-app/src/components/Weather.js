import React from "react";
import PropTypes from "prop-types";
import "./Weather.css";


function Weather(props) {
    const { location, weather } = props;
    // var mydate=new Date()
    // var year=mydate.getYear()
	// if(year<1000)
    // year+=1900
    // var day=mydate.getDay()
    // var month=mydate.getMonth()
    // var daym=mydate.getDate()
    // if(daym<10)
    // daym="0"+daym
    // var dayarray=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
    // var montharray=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
    // document.write(""+dayarray[day]+", "+montharray[month]+" "+daym+", "+year+"")						
                                 
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
        <div class="main">
        <div class="w3_agile_main_grids">
        <div class="w3layouts_main_grid">
        <div class="w3layouts_main_grid_left">
          <h2 >{`${location.name}, ${location.country}`}</h2>
          <p >{`${weather.condition.text}`}</p>
          <h3>Now</h3>
          <h4>{` ${weather.temp_c}`}<span>°c</span></h4>
        </div>
        <div class="w3layouts_main_grid_right">
					<canvas id="sleet" width="70" height="70"> </canvas>
					<div id="w3time"></div>
					<div class="w3layouts_date_year">
						{/* <!-- date --> */}
						{/* <!-- //date --> */}
					</div>
				</div>
				<div class="clear"> </div>
			</div>
          {/* show max and min temp
        {maxminTemp(weather.temp_c, weather.temp_c)} */}
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