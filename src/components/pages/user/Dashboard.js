import React, { Component } from 'react'
import APP_CONSTANTS from "../../../core/app_constants";

export default class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
        // call values from the storage and add it to the state
        isLogged: sessionStorage.getItem(APP_CONSTANTS.CONFIG.sessionStorage.isLogged),
    }
  }
  async componentDidMount() {
    // check if user logged in or redirect to Login page
    if (this.state.isLogged) {
        // user is logged in
        console.log("logged");
    } else {
        // NOT logged in redirect to Login
        window.location.href = "/login";
    }
  }
  // handle onClcik logout button
  handleLogout = (e) => {
    // To logout remove all items from the session storage
    sessionStorage.clear();
    // reload the page to call componentDidMount()
    window.location.reload();
  }
  render() {
    return (
      <div>
        <div>Dashboard</div>
        <input  value="logout" type="submit" onClick={this.handleLogout} />
      </div>
    )
  }
}
