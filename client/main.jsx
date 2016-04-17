import './style.scss';

import React from 'react';
import ReactDOM from 'react-dom';
import Slider from 'react-slider';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.onSliderChange = this.onSliderChange.bind(this);

    this.state = {
      sliderValue: 50,
    };

    const increaseSliderValue = () => {
      if (this.state.sliderValue < 100) this.setState({ sliderValue: this.state.sliderValue + 1 });
      else clearInterval(intervalFn);
    }

    const intervalFn = setInterval(() => increaseSliderValue(), 16);
  }

  onSliderChange(sliderValue) {
    this.setState({ sliderValue });
  }

  render() {
    return (
      <div>
        <div className="container" style={{opacity: this.state.sliderValue / 100}}>
          <div className="content">
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
        </div>
        <div className="slider-container">
          <Slider value={this.state.sliderValue} onChange={this.onSliderChange}>🔮</Slider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
