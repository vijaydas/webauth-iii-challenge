import React from "react";

class Login extends React.Component {

    state = {
        username: "vijay",
        password: "password"
    };

  render() {
    return (
      <>
        <h2>Login</h2>
        <form>
          <div>
            <label htmlFor="username" />
            <input
              id="username"
              onChange={this.handleChange}
              value={this.state.username}
              type="text"
            />
          </div>

          <div>
            <label htmlFor="password" />
            <input
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <button type="submit" />
          </div>
        </form>
      </>
    );
  }

  handleChange = event => {
      const { id, value } = event.target;
      this.setState({ [id]: value});
  }
}

export default Login;

