import { Spin, Alert } from 'antd';
import React, { Component } from "react";
import 'antd/dist/antd.css';

class LoadingSpinner extends Component {
    render() {
      return (
        <div>
        <Spin tip="Loading...">
        <Alert
        message="Weather Data is loading"
        description="Thank you."
        type="info"
        />
        </Spin>
     
        </div>
      );
    }
  }
  

  export default LoadingSpinner;