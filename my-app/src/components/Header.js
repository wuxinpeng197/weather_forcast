import React from "react";
import PropTypes from "prop-types";
import { PageHeader, Tabs, Button, Statistic, Descriptions } from 'antd';

const Header = () => {
  
  return (
      <div >
      <PageHeader
      title="Weather Forecast"
      avatar={{ src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4' }}
      extra={[
        <Button key="3">Today Weather</Button>,
        <Button key="2">Forecast</Button>,
        <Button key="1" type="primary">
          City Management
        </Button>,
      ]}></PageHeader>
      </div>
  );
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

export default Header;