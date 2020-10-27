import React from 'react';
import store from './Redux/store'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import './App.css';
import Quantity from '../src/Components/Quantity'
import History from '../src/Components/History/History'
function App() {
  return (
    <Router>
      <Switch>
        <Provider store={store}>
          <div className="App">
            <Route exact path="/" component={Quantity} />
            <Route exact path="/history" component={History}/>
            {/* <Quantity /> */}
          </div>
        </Provider>
      </Switch>
    </Router>
  );
}

export default App;
