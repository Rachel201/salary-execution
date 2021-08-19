import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Employees from './components/listEmployees/ListEmployees';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Employees/>
    </div>
    </Provider>
  );
}

export default App;
