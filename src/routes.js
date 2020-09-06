import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/home';
<<<<<<< HEAD
=======
import Login from './pages/login';
import Register from './pages/register';
import Profile from './pages/profile';

>>>>>>> bb329cf49dcd3f9e7aa3800eb1c4815d1dcd43c8

function Routes(){
   
        return(
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={Home} />
<<<<<<< HEAD
=======
                    <Route exact path='/login' component={Login} />
                    <Route exact path={'/register'} component={Register}/>
                    <Route exact path={'/profile'} component={Profile}/>
>>>>>>> bb329cf49dcd3f9e7aa3800eb1c4815d1dcd43c8
                </Switch>
            </BrowserRouter>

        );
    }


export default Routes;