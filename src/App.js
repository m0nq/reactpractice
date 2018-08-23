import PropTypes from 'prop-types';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
  btnClick() {
    alert("Button clicked...");
  }

  render() {
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.btnClick}>Click here</button>
      </div>
    );
  }
}

export default App;
