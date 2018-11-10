import * as React from 'react';
import Header from '../Header/Header';

export default class Main extends React.PureComponent {

    public render() {

        return <div className="Main">
            <Header />
            Main Page
        </div>
    }
}