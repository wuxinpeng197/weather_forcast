import React, { Component } from 'react';
import { withRouter,Route, Switch } from 'react-router-dom';
import App from './App';
import CityManagement from "./components/CityManagement";

class Router extends Component {
    render () {
        return (
            <div>
                    <Switch>
                        <Route path="/cityManagement" component={CityManagement} />
                        <Route path="/" exact component={App} />
                    </Switch>
            </div>
        );
    }
}

export default Router;
