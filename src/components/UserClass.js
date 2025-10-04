import React from "react";
import UserContext from "../utils/UserContext.js";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      info: {
        login: "Dummy",
        type: "Default",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/sahid202518");
    const json = await data.json();
    this.setState({ info: json });
    this.timer = setInterval(() => {}, 1000);
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("if count change");
    }
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { count, info } = this.state;
    const { login, type } = info;

    return (
      <div className="user-card">
        <h1>Count:{count}</h1>
        <button
          className="increase-btn"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h2>Name:{login}</h2>
        <h2>Location:{type}</h2>
        <h2>Contact:sahid@gmail</h2>
        <div>
          LoggedIn User
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-lg font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>
      </div>
    );
  }
}

export default UserClass;
