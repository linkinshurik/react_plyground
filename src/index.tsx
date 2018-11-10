import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';
import Login from './components/Login/Login';

export interface IHelloMessage {
    name: string;
}

const HelloMessage = (props: IHelloMessage) => {
    return <div className="red">Hello {props.name}</div>;
}

ReactDOM.render(
    <Login />,
    document.getElementById('container')
);