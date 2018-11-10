import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import Main from './components/Main/Main';
import Login from './components/Login/Login';

export interface IHelloMessage {
    name: string;
}

ReactDOM.render(
    <Main />,
    document.getElementById('container')
);