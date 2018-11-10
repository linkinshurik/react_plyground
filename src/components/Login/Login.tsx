import * as React from 'react';
import LockIcon from '@material-ui/icons/Lock';

export default class Login extends React.PureComponent {

    render() {

        return <div className="Login">
            <div className="Login-container">
                <div className="Login-logo">
                    <LockIcon fontSize="large" />
                </div>
                <input className="Login-input" type="text" placeholder="Login"/>
                <input className="Login-input" type="password" placeholder="Password"/>
                <div className="Login-bottom">
                    <button className="Submit">SUBMIT</button>
                </div>
            </div>
        </div>
    }
}