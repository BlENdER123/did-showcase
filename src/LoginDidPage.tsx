import React, {useContext} from "react";
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Context from "./Context";

function LoginDidPage() {

    const {status}: any = useContext(Context);

    return(
        <Router>
            <div className="modal-w modal-did show">
                <div className="text">Your DID has been created</div>
                <div className="did">{status[0].DID}</div>

                <button type="button" className="btn btn-secondary" onClick={() => {navigator.clipboard.writeText(status[0].DID)}} >COPY DID</button>
                
                <a href="/did-site/login">
                    <button type="button" className="btn btn-secondary">
                        
                            Go to Authorization page
                        
                    </button>
                </a>
            </div>
        </Router>
    );
}

export default LoginDidPage;