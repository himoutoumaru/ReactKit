import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import Home from '../components/Home/Index'

const Routes = () => (
    <div className="app">
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                {/*<Route path='/404' component={NotFound} />*/}
                {/*<Redirect from='*' to='/404' />*/}
            </Switch>
        </Router>
    </div>
);

export default Routes;