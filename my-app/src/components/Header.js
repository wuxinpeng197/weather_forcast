import React, {Component} from "react";
import PropTypes from "prop-types";
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';
import { withRouter,Route, Switch } from 'react-router-dom';

class Header extends Component {

  checkoutCity = () => {
    console.log(this.props)
    this.props.history.push( '/cityManagement' );
  }

  goBackWeather = () => {
        console.log(this.props)
        this.props.history.goBack();
    }

  render() {
    return (
        <div>
          <PageHeader
              title="Weather Forecast"
              avatar={{src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4'}}
              extra={[
                <Button key="3" onClick={this.goBackWeather}>Today Weather</Button>,
                <Button key="2">Forecast</Button>,
                <Button key="1" type="primary" onClick={this.checkoutCity}>
                  City Management
                </Button>,
              ]}></PageHeader>
        </div>
    );
  }
};

Header.defaultProps = {
  text: "Header text",
  color: "purple darken-4",
  textColor: "white"
};

Header.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  textColor: PropTypes.string
};

export default withRouter(Header);