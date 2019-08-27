import React, { Component } from "react";
import { Route, NavLink, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from "../pages/HomePage";
import ModelerPage from "../pages/ModelerPage";
import FrameworksPage from "../pages/FrameworksPage";
class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "hideSearch"
    }
  }
  ShowSearch = (event) => {
    return (
      this.setState({
        search: 'ShowSearch'
      })
    )
  }
  hideSearch = (event) => {
    return (
      this.setState({
        search: 'hideSearch'
      })
    )
  }
  render() {

    return (
      <Router>
        <nav>
          {/* render a navigation component */}
          <ul>
            <li>
              <NavLink exact activeClassName="active" to="/" onClick={this.hideSearch}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/modeler" onClick={this.hideSearch}>
                MODELER
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/frameworks" onClick={this.ShowSearch} >
                FRAMEWORKS
              </NavLink>
            </li>
          </ul>
          <hr />
          {/* render routing logic of react-router-dom */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/modeler" component={ModelerPage} />
            <Route path="/frameworks" component={FrameworksPage} />
          </Switch>
        </nav>
        <div id="search" className={this.state.search}></div>
      </Router>
    );
  }
}

export default Navigation;
