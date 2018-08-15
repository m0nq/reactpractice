import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <App headerText="My Heading" content="This is some content..."></App>
  </div>, document.getElementById('react-element')
);

registerServiceWorker();
