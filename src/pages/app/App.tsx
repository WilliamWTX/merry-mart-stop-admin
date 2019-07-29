import * as React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Main from '../main/Main';

class App extends React.Component {
    public renderRouter = () => {
        return (
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/"
                        component={Main}
                    />
                </Switch>
            </BrowserRouter>
        )
    };
    public render() {
        return this.renderRouter();
    }
}

export default App;
