import React, {useState} from 'react'
import {MemoryRouter, Switch, Route} from 'react-router-dom'
import './App.css';
import Main from './component/Main'
import Output from './component/Output'


function App() {
    return (
        // <Output/>
        <MemoryRouter>
            <Switch>
                <Route exact path="/" component={Main}/>
                <Route path="/result" component={Output}/>
            </Switch>
        </MemoryRouter>
    );
}

export default App;
