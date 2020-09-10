import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
import Header from './components/header';
import Pricing from './pages/pricing';

function Routes(){
   
        return(
            <BrowserRouter>
            <Header btnName='Try Free' />
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/pricing' component={Pricing} />
                    
                </Switch>
            </BrowserRouter>

        );
    }


export default Routes;