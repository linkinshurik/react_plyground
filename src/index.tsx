import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.scss';

export interface IHelloMessage {
    name: string;
}

const HelloMessage = (props: IHelloMessage) => {
    return <div className="red">Hello {props.name}</div>;
}

ReactDOM.render(
    <HelloMessage name="World" />,
    document.getElementById('container')
);