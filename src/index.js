import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import './custom.scss';
import './index.scss';
import './icons.scss';
import App from './components';
import * as serviceWorker from './serviceWorker';


window.onScrollActions = {};

window.onscroll = () => {
    for (let action in window.onScrollActions) {
        window.onScrollActions[action]();
    }
};


function Application(props){
    return (
        <Router base="/">
            <App/>
        </Router>
    );
}

ReactDOM.render(<Application />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
