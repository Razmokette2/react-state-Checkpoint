import { Component } from 'react';
import './App.css'; 
import avatar from './avatar.png';

class App extends Component {
  constructor() {
    super();
    this.state = {
      Person: {
        fullName: "John Doe",
        bio: "Web Developer with a passion for creating interactive applications.",
        imgSrc: avatar,
        profession: "Software Engineer"
      },
      shows: false,
      mountedTime: 0
    };
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleProfile = () => {
    this.setState({ shows: !this.state.shows });
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.Person;
    const { shows, mountedTime } = this.state;

    return (
      <div className="App">
        <button onClick={this.toggleProfile}>
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        {shows && (
          <div className="profile">
            <img src={imgSrc} alt="Profile" />
            <h1>{fullName}</h1>
            <p>{bio}</p>
            <h2>{profession}</h2>
          </div>
        )}

        <p>Component mounted {mountedTime} seconds ago.</p>
      </div>
    );
  }
}

export default App;
