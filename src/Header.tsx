import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import logo from './img/radiance logo.png'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

import StartPageHeader from './StartPageHeader';
import WelcomeDidPageHeader from './WelcomeDidPageHeader';
import AppPageHeader from './AppPageHeader';

function Header() {

    return(
        <Router>
            <div className="header">
                <div className="container">
                    <header className="d-flex flex-wrap justify-content-center py-3 mb-4">
                        <a href="/did-site" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                            <img src={logo} alt="logo" className="logo"/>
                            <span className="fs-4">RADIANCETEAM</span>
                        </a>

                        <Switch>
                            <Route exact path="/did-site" component={StartPageHeader}></Route>
                            <Route exact path="/did-site/welcome-did" component={WelcomeDidPageHeader}></Route>
                            <Route exact path="/did-site/login-did" component={WelcomeDidPageHeader}></Route>
                            <Route exact path="/did-site/login" component={WelcomeDidPageHeader}></Route>
                            <Route exact path="/did-site/app" component={AppPageHeader}></Route>
                        </Switch>

                    </header> 
                </div>
            </div>
        </Router>
    );

}

export default Header;