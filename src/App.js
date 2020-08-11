// I would like to thank https://codewithstupid.com/react-router-with-switch-and-link/ for the reference material to help me with my switch and BrowserRouter tags. I also wanted to thank Davy and Eric for their demos and to https://reactrouter.com/web/example/url-params for their reference materials as well. Also to you to Jon for helping me with the Switch and geting rid of that pesky comma that was floating around.//



import React from 'react';
import { Route } from 'react-router-dom';
import {  BrowserRouter, Switch } from 'react-router-dom';

import './App.css';

import Contact from './components/contact/Contact';
import Welcome from './components/welcome/Welcome';
import Clock from './components/welcome/clock/Clock';
import Navigation from './components/navigation/Navigation';
import Error from './components/error/Error';


function App() {
  return (
    <div className="App">


      <BrowserRouter>

          <Navigation />

        <Switch>

          <Route
            exact
            path="/"
            render={(props) => <Welcome{...props} name="Fall" />}
          />

          <Route
            
            path="/welcome/:name"
            component={Welcome}
          />

          <Route
            
            path="/clock"
            component={Clock}
          />

          <Route
            
            path="/contact"
            component={Contact}
          />

          <Route
          component={Error}
          />


        </Switch>

      </BrowserRouter>


    </div>

  );

}


export default App;
