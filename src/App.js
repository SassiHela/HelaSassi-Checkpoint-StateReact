import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import ImgSrc from "./Assets/img.jpg";

class App extends React.Component {
  state = {
    person: {
      fullName: "Hela Sassi",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      imgSrc: ImgSrc,
      profession: "Full Stack Developper",
    },
    show: false,
    timeShow: 0,
  };

  //Event after button click
  handleClick = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <div className="App">
        <h6>The time since the component has mounted</h6>
        {this.state.timeShow !== 0 ? (
          <span>{this.state.timeShow}</span>
        ) : (
          <span>{"0 second"}</span>
        )}

        <button type="button" class="btn btn-link" onClick={this.handleClick}>
          Show me
        </button>

        {this.state.show ? (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={this.state.person.imgSrc} />
            <Card.Body>
              <Card.Title>{this.state.person.fullName}</Card.Title>
              <Card.Text>
                A {this.state.person.profession},<br></br>
                {this.state.person.bio}
              </Card.Text>
            </Card.Body>
          </Card>
        ) : null}
      </div>
    );
  }

  //Convert seconds to minutes and hours
  secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " hours, ") : "";
    var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " minutes, ") : "";
    var sDisplay = s > 0 ? s + (s == 1 ? " second" : " seconds") : "";
    return hDisplay + mDisplay + sDisplay;
  }

  //method is called after the component is rendered
  componentDidMount() {
    {
      let count = 0;
      setInterval(() => {
        count++;
        return this.setState({ timeShow: this.secondsToHms(count) });
      }, 1000);
    }
  }
}

export default App;
