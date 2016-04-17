import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <img className="me" src="devers.png" />
        <div className="info">
          <h1>Devers Talmage</h1>
          <h4>Software engineer 🌎 Boston, MA</h4>
          <ul>
            <li>
              📧 <a href="mailto:deverstalmage@gmail.com">Email</a>
            </li>
            <li>
              👤 <a href="https://www.linkedin.com/in/deverstalmage">LinkedIn</a>
            </li>
            <li>
              💻 <a href="https://github.com/deverstalmage">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
