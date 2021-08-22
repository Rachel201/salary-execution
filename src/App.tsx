import {Switch, Route, Link} from "react-router-dom";
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import ListEmployees from './components/listEmployees/ListEmployees';
import Employees from './components/listEmployees/ListEmployees';
import Manager from './components/manager/Manager';
import store from './redux/store';
import { Button } from "@material-ui/core";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>salary execution</h1>
    <Switch>
        <Route path="/Manager">
           <Manager/>
        </Route>
        <Route path="ListEmployees">
          <ListEmployees/>
        </Route>
     </Switch>
     <ListEmployees/>
    
    </div>
    </Provider>
  );
}

export default App;
