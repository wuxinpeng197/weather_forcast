import React, { Component } from 'react';
// import { connect } from "react-redux";
import './App.css';
import Header from "./components/Header";
import Homepage from './components/Homepage';
import LoadingSpinner from './components/LoadingSpinner';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import fetchProductsAction from './api/index';
import {getProductsError, getProducts, getProductsPending} from './reducer/Weather';



class App extends Component {
  // state = {};

  constructor(props) {
    super(props);
    // this.shouldComponentRender = this.shouldComponentRender.bind(this);
  }

  componentDidMount(){
    const {fetchProducts} = this.props;
    this.props.fetchProducts();
  }


  render() {
    const primaryColor = "orange darken-2";
    const {data, error, pending} = this.props;
    console.log("render",pending,data,error)
    if ( this.props.pending ) {return <LoadingSpinner/>}

    return (
      <div>
          <Header/>
          <Homepage data={data}/>
          {/*{data.location}*/}
      </div> 
  
  );
}
}
const mapStateToProps = state => ({
  error: getProductsError(state),
  data: getProducts(state),
  pending: getProductsPending(state)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchProducts: fetchProductsAction
}, dispatch);


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
