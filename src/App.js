import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from './home';
import Login from './login';
class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <h2>Welcome to React Router Tutorial</h2>
          <ul>
            <li><Link to={'/'}/>Home</li>
            <li><Link to={'/login'}/>Login</li>
          </ul>
          <hr/>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/login' component={Login}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
