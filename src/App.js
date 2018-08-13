import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}

class Header extends Component {
    render() {
        return (
            <div>
                <h1>Header</h1>
            </div>
        );
    }
}

class Content extends Component {
    render() {
        return (
            <div>
                <h2>Content</h2>
                <p>Some content text, yo!</p>
            </div>
        );
    }
}

export default App;
