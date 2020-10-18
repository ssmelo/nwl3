import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Landing from './pages/Landing/index';
import OrphanagesMap from './pages/OrphanagesMap/index'

const Routes = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Landing}></Route>
                <Route path="/app" component={OrphanagesMap}></Route>
            </Switch>           
        </BrowserRouter>
    );
}

export default Routes;

