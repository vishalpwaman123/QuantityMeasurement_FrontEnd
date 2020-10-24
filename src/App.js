import React from 'react';
import store from './Redux/store'
import { Provider } from 'react-redux'
import './App.css';
import Quantity from '../src/Components/Quantity'

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Quantity />
      </div>
    </Provider>
  );
}

export default App;
