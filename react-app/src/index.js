import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';

/*
importcontainers here

ex) 
import {Landing, InputLayout, FinalSubmit} from './containers';
*/

import {
    Router,
    Route,
    IndexRoute,
    browserHistory
} from 'react-router';

const rootElement = document.getElementById('root'); // I don't know.. because I am server developer
ReactDOM.render(
    /*
    Virtual DOM rendering part, see below
    */
    );

/** 예시 
 * 
ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/">
            <IndexRoute component={Landing} />
            <Route path="/input" component={InputLayout}>
                <Route path="/finalsubmit" component={FinalSubmit} />
            </Route>
        </Route>
    </Router>, rootElement
    );
 */
