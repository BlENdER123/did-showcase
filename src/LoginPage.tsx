import React from "react";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';

function LoginPage() {
    return(
        <Router>
            <div className="modal-w modal-welcomeback show">
                <div className="text">Welcome back!</div>
                
                <a href="/did-site/app">
                    <button type="button" className="btn btn-secondary">
                        
                            Log in
                        
                    </button>
                </a>
            </div>
        </Router>
    );
}

export default LoginPage;