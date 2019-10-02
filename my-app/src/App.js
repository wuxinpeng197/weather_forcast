import React, { Component } from 'react';
// import { connect } from "react-redux";
import Header from "./components/Header";
import Homepage from './components/Homepage';
import styled from "styled-components";
import LoadingSpinner from './components/LoadingSpinner';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import fetchProductsAction from './api/index';
import {getProductsError, getProducts, getProductsPending} from './reducer/index';



class App extends Component {
  // state = {};

  constructor(props) {
    super(props);
    this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount(){
    const {fetchProducts} = this.props;
    this.props.fetchProducts();
  }

  shouldComponentRender() {
    const {pending} = this.props;
    console.log("should:",pending)
    if(pending === false) return true;
    // more tests
    return true;
}

  render() {
    const primaryColor = "orange darken-2";
    const {data, error, pending} = this.props;
    console.log("render",pending,data,error)
    if(!this.shouldComponentRender()) return <LoadingSpinner />

    return (
      <div className="container">
      <Header/>
          <Homepage data={data}/>
          {data.location}
      </div> 
  
  );
}
}
const mapStateToProps = state => ({
  error: getProductsError(state),
  data: getProducts(state),
  pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch)


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
