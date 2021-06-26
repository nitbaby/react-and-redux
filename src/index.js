import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';
// const App = () => {
//   return (
//     <div>Hello there!
//       <SeasonDisplay/>
//     </div>
//   )
// };

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: null,
      errorMessage: ''
    };

  }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({lat: position.coords.latitude});
        console.log(position)
      },
      (err) => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error message: {this.state.errorMessage}
        </div>
      );
    } else if (!this.state.errorMessage && this.state.lat) {
      return (
        <SeasonDisplay lat={this.state.lat}></SeasonDisplay>
      );
    } else {
      return (
        <Loader message="Waiting for location data..."/>
      );
    }
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,
  document.getElementById('root')
);
