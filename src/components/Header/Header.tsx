import * as React from 'react';
import SettingsIcon from "../../../node_modules/@material-ui/icons/Settings"

export default class Header extends React.PureComponent {

    public render() {

        return <div className="Header">
            <div className="Header-item">
                <SettingsIcon />
                <span className = "Header-item-text">Settings</span>
            </div>
        </div>
    }
}