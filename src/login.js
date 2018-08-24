import React from 'react';
// import ReactDOM from 'react-dom';

class Login extends React.Component {
  render() {
    return (
      <div>
        <table>
          <tr>
            <td colSpan={2}>
              <h2>Login</h2>
            </td>
          </tr>
          <tr>
            <td>User Name</td>
            <td><input type="text" value={'User Name'}/></td>
          </tr>
          <tr>
            <td>Password</td>
            <td><input type="password"/></td>
          </tr>
          <tr>
            <td colSpan={2}>
              <button>Submit</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Login;
