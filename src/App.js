import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <h2>Welcome to this app!</h2>
                <img src={logo}/>
            </div>
        );
    }
}

export default App;
